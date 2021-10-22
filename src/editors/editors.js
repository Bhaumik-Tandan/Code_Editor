import React from 'react'
import Web from './web/web';
import Prog from './prog_lang/prog';
import {useLanguage} from "../language/languageHook";
function Editors() {
    const lang=useLanguage();
    return (
        lang=="web"?
        <Web/>:
        <Prog lang={lang}/>
    )
}

export default Editors;
