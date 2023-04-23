import React from 'react';
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="src/header">Home</a>
            <a href="src/header">Skills</a>
            <a href="src/header">Projects</a>
            <a href="src/header">Contacts</a>
        </div>
    );
};

export default Nav;