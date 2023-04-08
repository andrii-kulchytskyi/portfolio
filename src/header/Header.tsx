import React from 'react';
import styles from '../header/Header.module.css'
import Nav from "./Nav";

const Header = () => {
    return (
        <div className={styles.header}>
        <Nav/>
        </div>
    );
};

export default Header;