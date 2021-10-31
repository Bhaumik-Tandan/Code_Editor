import React, { useState,useContext,useEffect} from 'react'
import {useLanguage} from '../../../language/languageHook';


const Code=React.createContext();

export function useCode()
{
    return useContext(Code);
}


const CodeSet=React.createContext();
export function useCodeSet() {
    return useContext(CodeSet);   
}



function CodeHook({children}){

    const lang=useLanguage();
    const [code, setCode] = useState();;

    function changeCode(setVal)
    {
        setCode(setVal);  
        localStorage[lang]=setVal;
    }
   
    return (
        <CodeSet.Provider value={changeCode} >
        <Code.Provider value={code} >
            {children}
        </Code.Provider>
        </CodeSet.Provider>
    )
}

export default CodeHook;