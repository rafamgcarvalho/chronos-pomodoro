import { Home } from './pages/home/Index';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/messagesContainer/Index';

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home></Home>
            </MessagesContainer>
        </TaskContextProvider>
    )
}