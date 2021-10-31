import React,{useState} from 'react'
import CodeHook from './codeHook/codeHook';
import MainEditor from './mainEditor/mainEditor';
import Utility from "./utility/utility";
function Prog(props) {
    return (
        <CodeHook>
            <MainEditor lang={props.lang}/>
            <Utility/>
        </CodeHook>
    )
}

export default Prog;
