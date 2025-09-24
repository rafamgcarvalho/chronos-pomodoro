import { useEffect, useReducer, useRef} from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const playBeepRef = useRef<ReturnType<typeof loadBeep>>(null);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if(countDownSeconds <= 0) {
            if(playBeepRef.current) {
                playBeepRef.current();
                playBeepRef.current = null;
            }

            dispatch({
                type: TaskActionTypes.COMPLETE_TASK,
            });
            worker.terminate();
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: {secondsRemaining: countDownSeconds},
            });
        }
    });

    useEffect(() => {
        if(!state.activeTask) {
            console.log('Worker terminado');
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state]);

    useEffect(() => {
        if(state.activeTask && playBeepRef.current === null) {
            console.log('Carregando audio')
            playBeepRef.current = loadBeep();
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
           {children}
        </TaskContext.Provider>
    )
}