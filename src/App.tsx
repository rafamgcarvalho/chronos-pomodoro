import {PlayCircleIcon} from 'lucide-react'
import {Container} from './components/Container/Container';
// import { Heading } from './components/Heading/Heading';
import {Menu} from './components/Menu/Menu';
import {Logo} from './components/Logo/Logo';
import {Footer} from './components/Footer/Footer';
import {Cycles} from './components/Cycles/Index';
import {CountDown} from './components/CountDown/CountDown';
import {DefaultInput} from './components/DefaultInput/DefaultInput';
import {DefaultButton} from './components/DefaultButton/DefaultButton';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>

            <Container>
                <Menu></Menu>
            </Container>

            <Container>
                <CountDown></CountDown>
            </Container>

            <Container>
                <form className='form'action="">
                    <div className="formRow">
                        <DefaultInput labelText='Task' id= 'meuInput' type = 'text' placeholder='Digite Algo'></DefaultInput>
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon= {<PlayCircleIcon/>}/>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer></Footer>
            </Container>
        </>
    )
}