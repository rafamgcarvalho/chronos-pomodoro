import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from 'lucide-react';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <div className={styles.menu}>
            <div className="homePage">
                <a className={styles.menuLink} href="#">
                    <HouseIcon />
                </a>
            </div>

            <div className="history">
                <a className={styles.menuLink} href="#">
                    <HistoryIcon />
                </a>
            </div>

            <div className="config">
                <a className={styles.menuLink} href="#">
                    <SettingsIcon />
                </a>
            </div>

            <div className="colorTheme">
                <a className={styles.menuLink} href="#">
                    <SunIcon />
                </a>
            </div>
        </div>
    );
}