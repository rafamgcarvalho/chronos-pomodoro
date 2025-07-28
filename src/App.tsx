import {Container} from './components/Container/Container';
import { Heading } from './components/Heading/Heading';
import {Logo} from './components/Logo/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>

            <Container>
                <Heading>MENU</Heading>
            </Container>
        </>
    )
}