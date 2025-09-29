import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { Heading } from "../../components/Heading/Heading";
import { MainTemplate } from "../../template/MainTemplate/Index";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/UseTaskContext";
import { ShowMessage } from "../../adapters/showMessage";


export function Settings() {
    const {state} = useTaskContext();
    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        ShowMessage.dismiss();

        const formErrors = [];

        const workTimeValue = Number(workTimeInput.current?.value);
        const shortBreakTimeValue = Number(shortBreakTimeInput.current?.value);
        const longBreakTimeValue = Number(longBreakTimeInput.current?.value);

        if(isNaN(workTimeValue) || isNaN(shortBreakTimeValue) || isNaN(longBreakTimeValue)) {
            formErrors.push('Digite apenas números para todos os campos');
        }

        if(workTimeValue < 1 || workTimeValue > 99) {
            formErrors.push('Digite valores entre 1 e 99 para foco');
        }

        if(shortBreakTimeValue < 1 || shortBreakTimeValue > 30) {
            formErrors.push('Digite valores entre 1 e 30 para descanso curto');
        }

        if(longBreakTimeValue < 1 || longBreakTimeValue > 60) {
            formErrors.push('Digite valores entre 1 e 60 para descanso longo');
        }

        if(formErrors.length > 0) {
            formErrors.forEach(error => {
                ShowMessage.error(error);
            });
            return;
        }
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>Modifique as configurações para tempo de foco, descanso curto e descanso longo</p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form">
                    <div className="formRow">
                        <DefaultInput
                            id="workTime"
                            labelText="Foco"
                            type="number"
                            ref={workTimeInput}
                            defaultValue={state.config.workTime}>
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <DefaultInput
                            id="shortBreakTime"
                            labelText="Descanso Curto"
                            type="number"
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}>
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <DefaultInput
                            id="longBreakTime"
                            labelText="Descanso Longo"
                            type="number"
                            ref={longBreakTimeInput}
                            defaultValue={state.config.longBreakTime}>
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<SaveIcon />}
                            aria-label="Salvar configurações"
                            title="Salvar configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}