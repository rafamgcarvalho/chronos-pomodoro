import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/messagesContainer/Index';
import { MainRouter } from './routers/MainRouter/Index';

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <MainRouter></MainRouter>
            </MessagesContainer>
        </TaskContextProvider>
    )
}