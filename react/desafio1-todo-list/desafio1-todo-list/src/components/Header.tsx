import styles from './Header.module.css';

import Rocket from '../assets/rocket.png';

export function Header() {
    return(
        <header className={styles.container}>
            <div className={styles.headerContent}>
                <div>
                    <img src={Rocket} alt="" />
                    <span>to</span><span>do</span>
                </div>
            </div>
        </header>
    )
}