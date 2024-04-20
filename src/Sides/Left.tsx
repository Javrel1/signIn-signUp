import React from "react";
import {Logo} from "../Logo/Logo";
import {Info} from "../Info/Info";
import {Networks} from "../Networks/Networks";
import {Lines} from "../Lines/Lines";
import {Forms} from "../Forms/Forms";
import {Button} from "../Button/Button";

export function Left(){
    return(
        <div>
            <Logo/>
            <Info/>
            <Networks/>
            <Lines/>
            <Forms/>
            <Button/>
        </div>
    )
}