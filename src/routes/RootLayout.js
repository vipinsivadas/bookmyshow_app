import React from "react";
import styles from './RootLayout.module.css'
import { Link, Outlet } from "react-router-dom";


function RootLayout(props){
    return(
        <>
        <header className={styles.Header}>
            <span>cinebaba</span>
            <nav>
                <ul className={styles.Navlist}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                       <Link to={'/movies'}>Movie</Link>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        <footer className={styles.Footer}>
            <span>copyright cinebaba</span>
            <span>developed by vipin</span>

        </footer>
        </>
    )
}

export default RootLayout;