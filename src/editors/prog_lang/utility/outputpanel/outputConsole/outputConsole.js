import React,{useState,useEffect} from 'react';
import {useLanguage} from "../../../../../language/languageHook";
import {useLoading,useLoadingSet} from "./loading/loadingHook/loadingHook";
import Loading from "./loading/loading";
import {restCon} from "../../../../../restCon";
import {useCode} from "../../../codeHook/codeHook";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-terminal'
const settings=require("../../../settings.json");

function OutputConsole(props) {
    const lang=useLanguage();
    const [output,setOutput]=useState("Run code to see output here....");
    const loading=useLoading();
    const setLoading=useLoadingSet();
    const api_lang=settings[lang]["api_lang"];
    const api_url=settings[lang]["api_url"];
    const code=useCode();

    useEffect(() => {
        setOutput("Run code to see output here....");
    }, [lang])

    useEffect(() => {
        async function runCode() 
        {
            if(!loading)
            return;
            const res= await restCon({"code": code,"lang": api_lang},"POST",api_url);
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
