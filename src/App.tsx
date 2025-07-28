import {Container} from './components/Container/Container';
// import { Heading } from './components/Heading/Heading';
import {Menu} from './components/Menu/Menu';
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
                <Menu></Menu>
            </Container>
        </>
    )
}