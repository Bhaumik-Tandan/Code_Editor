import React from 'react';
import {useLoading,useLoadingSet} from "../outputpanel/outputConsole/loading/loadingHook/loadingHook";


function RunButton() {
    const load=useLoading();
    const set=useLoadingSet();
    return (
        <center>
            {
                load
                    ?
                    <button disabled onClick={set}>RUN</button>
                    :
                    <button onClick={set}>RUN</button>
            }
        </center>
    )
}

export default RunButton;
