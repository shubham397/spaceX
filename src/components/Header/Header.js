import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>History</Link>
                    </li>
                    <li>
                        <Link to='/mission'>Mission</Link>
                    </li>
                    <li>
                        <Link to='/launches'>Launches</Link>
                    </li>
                    <li>
                        <Link to='/launchpad'>Launchpads</Link>
                    </li>
                    <li>
                        <Link to='/landpad'>Landingpads</Link>
                    </li>
                    <li>
                        <Link to='/rockets'>Rockets</Link>
                    </li>
                    <li>
                        <Link to='/ships'>Ships</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
