import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/CountDown";
import { MainForm } from "../../components/MainForm/Index";
import { MainTemplate } from "../../template/MainTemplate/Index";


export function Settings() {
    return (
        <MainTemplate>
            <Container>
                <CountDown></CountDown>
            </Container>

            <Container>
                <MainForm></MainForm>
            </Container>
        </MainTemplate>
    )
}