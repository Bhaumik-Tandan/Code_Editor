import React from 'react'
import LoadingHook from './outputpanel/outputConsole/loading/loadingHook/loadingHook';
import RunButton from "./runButton/runButton";
import OutputPanel from "./outputpanel/outputpanel";
function Utility() {
    return (
            <LoadingHook>
                <RunButton/>
                <OutputPanel/>
            </LoadingHook>
    )
}

export default Utility;
