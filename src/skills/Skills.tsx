import React from 'react';
import style from './Skills.module.css'

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <h2 className={style.title}>Skills
                <div className={style.skills}></div>
            </h2>

        </div>
    );
};

export default Skills;