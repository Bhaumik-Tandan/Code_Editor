import React from 'react'
import ReactLoading from 'react-loading';
import "./loading.css";
function Loading() {
    return (
        <div className="loadingOutputConsole">
           <ReactLoading  type="spokes" color="red"/>
            <div>Executing</div>
        </div>
    )
}

export default Loading;