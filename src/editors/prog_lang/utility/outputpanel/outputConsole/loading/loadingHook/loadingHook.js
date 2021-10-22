import React, { useState,useContext,useEffect} from 'react'


const Loading=React.createContext();

export function useLoading()
{
    return useContext(Loading);
}


const LoadingSet=React.createContext();
export function useLoadingSet() {
    return useContext(LoadingSet);   
}



function LoadingHook({children}){

    const [loading, setLoading] = useState(0);

    function changeLoading()
    {
        setLoading(prevLoading=>!prevLoading);  
    }
   
    return (
        <LoadingSet.Provider value={changeLoading} >
        <Loading.Provider value={loading} >
            {children}
        </Loading.Provider>
        </LoadingSet.Provider>
    )
}

export default LoadingHook;