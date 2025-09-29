import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";
import { Tips } from "../Tips/Tips";
import { ShowMessage } from "../../adapters/showMessage";
// import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    const lastTaskName = state.tasks[state.tasks.length - 1]?.name;

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        ShowMessage.dismiss();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            ShowMessage.warn('Digite o nome da tarefa');

            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

        ShowMessage.sucess('Tarefa Iniciada');
    }

    function handleInterruptTask() {
        ShowMessage.dismiss();
        ShowMessage.error('Tarefa Interrompida!')
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput
                    labelText='Task'
                    id='meuInput'
                    type='text'
                    placeholder='Digite Algo'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                    defaultValue={lastTaskName}>
                </DefaultInput>
            </div>

            <div className="formRow">
                <Tips></Tips>
            </div>

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                    <DefaultButton
                        aria-label="Iniciar nova tarefa"
                        title="Iniciar nova tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        key='botao_submit'
                    />
                )}

                {!!state.activeTask && (
                    <DefaultButton
                        aria-label="Interromper tarefa atual"
                        title="Interromper tarefa atual"
                        type="button"
                        color="red"
                        icon={<StopCircleIcon />}
                        onClick={handleInterruptTask}
                        key='botao_button'
                    />
                )}
            </div>
        </form>
    );
}