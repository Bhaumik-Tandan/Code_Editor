import React from 'react'
import Web from './web/web';
import Prog from './prog_lang/prog';
import {useLanguage} from "../language/languageHook";
import CodeHook from './prog_lang/codeHook/codeHook';
function Editors() {
    const lang=useLanguage();
    return (
        lang=="web"?
        <Web/>:
        <CodeHook><Prog lang={lang}/></CodeHook>
    )
}

export default Editors;
