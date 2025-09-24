import { useEffect, useReducer} from "react";
import { initialTaskState } from "./InitialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if(countDownSeconds <= 0) {
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
        console.log(state);

        if(!state.activeTask) {
            console.log('Worker terminado');
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
           {children}
        </TaskContext.Provider>
    )
}