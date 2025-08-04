import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Menu.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        return() => {
            
        }
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Home'>
                <HouseIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label='Ver histórico' title='Histórico'>
                <HistoryIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label='Ir para Configurações' title='Configurações'>
                <SettingsIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Mudar Tema' onClick={handleThemeChange}>
                <SunIcon />
            </a>
        </nav>
    );
}