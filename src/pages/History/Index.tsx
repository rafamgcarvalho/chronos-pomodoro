import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { Heading } from "../../components/Heading/Heading";
import { MainTemplate } from "../../template/MainTemplate/Index";

import styles from './Styles.module.css';
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { ShowMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";


export function History() {
    const { state, dispatch } = useTaskContext();
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
    const hasTasks = state.tasks.length > 0;

    const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: 'startDate',
            direction: 'desc',
        }
    });

    useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro'
  }, []);

    useEffect(() => {
        setSortTaskOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }));
    }, [state.tasks])

    useEffect(() => {
        if(!confirmClearHistory) return;

        setConfirmClearHistory(false);

        dispatch({ type: TaskActionTypes.RESET_STATE })
    }, [confirmClearHistory, dispatch]);

    useEffect(() => {
        return () => {
            ShowMessage.dismiss();
        } 
    }, []);

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

        setSortTaskOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTaskOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        })
    }

    function handleResetHistory() {
        ShowMessage.dismiss();
        ShowMessage.confirm('Tem certeza?', (confirmation) => {
            setConfirmClearHistory(confirmation);
        })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <DefaultButton icon={<TrashIcon />}
                                color="red"
                                aria-label="Apagar todo o histórico"
                                title="Apagar histórico"
                                onClick={handleResetHistory}
                            />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort}>Tarefa</th>
                                    <th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort}>Duração</th>
                                    <th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort}>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortTaskOptions.tasks.map(task => {
                                    const taskTypeDictionary = {
                                        workTime: 'Foco',
                                        shortBreakTime: 'Descanso curto',
                                        longBreakTime: 'Descanso longo'
                                    }

                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>{taskTypeDictionary[task.type]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {!hasTasks && (
                    <p style={{ textAlign: 'center' }}>Ainda não existem tarefas criadas</p>
                )}
            </Container>
        </MainTemplate>
    )
}