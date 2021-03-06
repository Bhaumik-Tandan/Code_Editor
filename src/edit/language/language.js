import React from 'react'
import {useLanguageSet,useLanguage} from "./languageHook";
import "./language.css";
import {useCodeSet} from "../editors/prog_lang/codeHook/codeHook";

function Language() {
    const list = require("../editors/prog_lang/settings.json");
    const setLang=useLanguageSet();
    const language=useLanguage();
    const setLocalStorage=(v)=>localStorage[v]?localStorage[v]:list[v]["boiler_code"];
    const setCode=useCodeSet();

    function onClick(e)
    {
        setLang(e.target.value);
        // setCode(localStorage[language]);
    }

    return (
        <select className="language" onClick={onClick}>
                <option value="web">Web Design</option>
                {Object.keys(list).map((value)=>{
                    localStorage[value]=setLocalStorage(value);
                    if(language==value)
                    return <option selected key={value} value={value}>{value.charAt(0).toUpperCase()+value.slice(1)}</option>;
                    return <option key={value} value={value}>{value.charAt(0).toUpperCase()+value.slice(1)}</option>
                })}
        </select>
    )

}

export default Language;
