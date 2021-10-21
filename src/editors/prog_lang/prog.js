import React,{useState} from 'react'
import TextEditor from "../textEditor/textEditor";
import RunButton from './runButton/runButton';
import OutputPanel from './outputpanel/outputpanel';
import { useCodeSet } from './codeHook/codeHook';
import LoadingHook from './outputpanel/outputConsole/loading/loadingHook/loadingHook';
const styleEditor={
    "position":"absolute",
    "left":"2.5vw",
    "top":"6vh",
    "border":"0.25vh solid #73AD21",
    "width":"95vw",
    "height":"60vh"
};


const settings=require("./settings.json");

function Prog(props) {

    const setCode=useCodeSet();

    return (
        <div>
            <TextEditor settings={{"style":styleEditor,"theme":"twilight",
            "mode":settings[props.lang]["mode"],"fontSize":"1.5vw","tabSize":"2"}} 
            localStorageName={props.lang} setFun={setCode}/>
            <LoadingHook>
                <RunButton/>
                <OutputPanel/>
            </LoadingHook>
        </div>
    )
}

export default Prog;
