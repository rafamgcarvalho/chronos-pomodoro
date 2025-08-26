import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Index";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { DefaultInput } from "../DefaultInput/DefaultInput";

export function MainForm() {
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput labelText='Task' id='meuInput' type='text' placeholder='Digite Algo'></DefaultInput>
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