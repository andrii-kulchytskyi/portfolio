import React from 'react';
import style from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <h2 className={style.title}>Skills
                <div className={style.skills}>
                    <Skill title={"JS"} description={"asdsadasdsadas"}/>
                    <Skill title={"CSS"} description={"fdgdfgdfvcx"}/>
                    <Skill title={"HTML"} description={"l;kd;fgk;dlfkgl;dfgk;dfl"}/>
                </div>
            </h2>

        </div>
    );
};

export default Skills;