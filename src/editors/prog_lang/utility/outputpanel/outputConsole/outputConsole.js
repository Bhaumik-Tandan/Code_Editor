import React,{useState,useEffect} from 'react';
import {useLanguage} from "../../../../../language/languageHook";
import {useLoading,useLoadingSet} from "./loading/loadingHook/loadingHook";
import Loading from "./loading/loading";
import {restCon} from "../../../../../restCon";
import {useCode} from "../../../codeHook/codeHook";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-terminal'

function OutputConsole(props) {
    const lang=useLanguage();
    const [output,setOutput]=useState("Run code to see output here....");
    const loading=useLoading();
    const setLoading=useLoadingSet();
    const api_lang=require("../../../settings.json")[lang]["api_lang"];
    const code=useCode();

    useEffect(() => {
        setOutput("Run code to see output here....");
    }, [lang])

    useEffect(() => {

        async function runCode() 
        {
            if(!loading)
            return;
            const res= await restCon({"code": code,"lang": api_lang},"POST",REACT_CODE_COMPILE_API);
            const  response=await res.json();
            const error=response.error;
            const output=response.output;
            if(output)
            setOutput(output);
            else
            setOutput(error);
            setLoading(0);
        }
        runCode();
        
    }, [loading])

    return (
        <div className="outputConsole">
           {loading?<Loading/>:
           <AceEditor 
           value={output} 
           theme="terminal"
           fontSize="1.2vw" 
           tabSize="2" 
           style={{"position": "absolute", "width":"95vw","height":"20vh"}}
           showGutter={false} 
           highlightActiveLine={false}/>}
        </div>
    )
}

export default OutputConsole;
