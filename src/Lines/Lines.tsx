import React from "react";
import style from './style.module.css';

export function Lines(){
    return(
        <div className={style.container}>
            <div className={style.lines}>
                <div className={style.line}></div>
                <div className={style.or}>OR</div>
                <div className={style.line}></div>
            </div>
        </div>
    )
}