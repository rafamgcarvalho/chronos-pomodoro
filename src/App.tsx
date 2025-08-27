import { Home } from './pages/home/Index';
import {TaskContextProvider } from './contexts/TaskContext/Index';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <TaskContextProvider>
            <Home></Home>
        </TaskContextProvider>
    )
}