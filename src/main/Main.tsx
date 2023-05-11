import React from 'react';
import styles from '../main/Main.module.css'


const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
            <div className={styles.container}></div>
                <span>Hi there!</span>
                <h1>I am Andrii Kulchytskyi</h1>
                <p>A React Developer</p>
            </div>
            <div className={styles.photo}></div>
        </div>
    );
};

export default Main;