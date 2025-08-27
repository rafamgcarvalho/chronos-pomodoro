import { useTaskContext } from '../../contexts/TaskContext/Index';
import styles from './CountDown.module.css';

export function CountDown() {
    const {state} = useTaskContext();

    return (
        <div className={styles.container}>
            {state.formattedSecondsRemaining}
        </div>
    );
}