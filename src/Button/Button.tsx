import React from "react";
import style from './style.module.css';
export function Button(){


    return(
        <div className={style.container}>
            <div className={style.elements}>
                <div className={style.button}>
                    <button>Sign In</button>
                </div>
                {/*<div className={style.message}>*/}
                {/*    {registrationSuccess &&*/}
                {/*        <Alert sx={{width: '400px', marginTop: '40px'}} severity="success">*/}
                {/*            You have been successfully registered.*/}
                {/*        </Alert> }*/}
                {/*</div>*/}
            </div>
        </div>
    )
}