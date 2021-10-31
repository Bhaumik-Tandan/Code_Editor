import React, { useState,useContext,useEffect} from 'react'



const Language=React.createContext();

export function useLanguage()
{
    return useContext(Language);
}


const LanguageSet=React.createContext();
export function useLanguageSet() {
    return useContext(LanguageSet);   
}



function LanguageHook({children}){
    const [language, setLanguage] = useState(localStorage["language"]?localStorage["language"]:"web");//to avoid error

    function changeLanguage(setVal)
    {
        setLanguage(setVal);  
        localStorage["language"]=setVal;
    }
   
    return (
        <LanguageSet.Provider value={changeLanguage} >
        <Language.Provider value={language} >
            {children}
        </Language.Provider>
        </LanguageSet.Provider>
    )
}

export default LanguageHook;