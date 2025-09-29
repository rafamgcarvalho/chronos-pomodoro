import { BrowserRouter, Route, Routes, useLocation } from "react-router"
import { AboutPomodoro } from "../../pages/AboutPomodoro/Index"
import { NotFound } from "../../pages/NotFound/Index"
import { Home } from "../../pages/home/Index"
import { useEffect } from "react";
import { History } from "../../pages/History/Index";

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />} />
                <Route path='/about-pomodoro' element={<AboutPomodoro />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <ScrollToTop/>
        </BrowserRouter>
    )
}