import React,{useState,useEffect} from 'react';
import "./outputConsole.css";
import {useLanguage} from "../../../../../language/languageHook";
import {useLoading,useLoadingSet} from "./loading/loadingHook/loadingHook";
import Loading from "./loading/loading";
import {restCon} from "../../../../../restCon";
import {useCode} from "../../../codeHook/codeHook";

function OutputConsole(props) {
    const lang=useLanguage();
    const getLocalStorage=()=>localStorage[lang+"Output"]?localStorage[lang+"Output"]:"Run code to see output here....";
    const [output,setOutput]=useState(getLocalStorage());
    const loading=useLoading();
    const setLoading=useLoadingSet();
    const api_lang=require("../../../settings.json")[lang]["api_lang"];
    const code=useCode();

    useEffect(() => {

        async function runCode() 
        {
            if(!loading)
            return;
            const res= await restCon({"code": code,"lang": api_lang},"POST","http://localhost:8080");
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
           {loading?<Loading/>:output}
        </div>
    )
}

export default OutputConsole;
