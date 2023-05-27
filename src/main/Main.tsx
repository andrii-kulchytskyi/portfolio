import React from 'react';
import styles from '../main/Main.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import Skills from "../skills/Skills";


const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <div className={stylesContainer.container}></div>
                <span>Hi there!</span>
                <h1>I am Andrii Kulchytskyi</h1>
                <p>A React Developer</p>
            </div>
            <div className={styles.photo}></div>
            <Skills/>
        </div>
    );
};

export default Main;