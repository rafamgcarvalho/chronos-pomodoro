import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import { useState } from "react";

export function MainForm() {
    const [taskName, setTaskName] = useState('');

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className="formRow">
                <DefaultInput labelText='Task' id='meuInput' type='text' placeholder='Digite Algo' value={taskName} onChange={e => setTaskName(e.target.value)}></DefaultInput>
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}