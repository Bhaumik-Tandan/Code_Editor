import React,{useEffect} from 'react';
import { useCodeSet } from '../codeHook/codeHook';
import TextEditor from "../../textEditor/textEditor";

const styleEditor={
    "position":"absolute",
    "left":"2.5vw",
    "top":"6vh",
    "border":"0.25vh solid #73AD21",
    "width":"95vw",
    "height":"60vh"
};

function MainEditor(props) {
    const setCode=useCodeSet();
    const settings=require("../settings.json");

    useEffect(() => {
        setCode(localStorage[props.lang]);
    },[props.lang]);    

    return (
        <TextEditor settings={{"style":styleEditor,"theme":"twilight",
            "mode":settings[props.lang]["mode"],"fontSize":"1.5vw","tabSize":"2"}} 
            localStorageName={props.lang} setFun={setCode}/>
    )
}

export default MainEditor;
