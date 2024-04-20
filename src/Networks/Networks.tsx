import React from "react";
import style from './style.module.css';
import facebook from '../sources/facebook.png';
import google from '../sources/google.png';
import apple from '../sources/apple.png';

export function Networks(){
    return(
        <div className={style.container}>
            <div className={style.networks}>
                <div className={style.network}>
                    <a href="https://www.facebook.com/">
                        <img className={style.facebook} src={facebook}/>
                    </a>
                </div>
                <div className={style.network}>
                    <a href="https://www.google.com/">
                        <img className={style.google} src={google}/>
                    </a>
                </div>
                <div className={style.network}>
                    <a href="https://www.apple.com/">
                        <img className={style.apple} src={apple}/>
                    </a>
                </div>
            </div>
        </div>
    )
}