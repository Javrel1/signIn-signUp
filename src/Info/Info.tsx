import React from "react";
import style from './style.module.css';

export function Info(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.first}>
                    Login to your account
                </div>
                <div className={style.second}>
                    Login using social networks
                </div>
            </div>
        </div>
    )
}