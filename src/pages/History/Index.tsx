import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { Heading } from "../../components/Heading/Heading";
import { MainTemplate } from "../../template/MainTemplate/Index";

import styles from './Styles.module.css';
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";


export function History() {
    const {state} = useTaskContext();

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <DefaultButton icon={<TrashIcon />}
                            color="red"
                            aria-label="Apagar todo o histórico"
                            title="Apagar histórico"
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.tasks.map(task => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{task.type}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    )
}