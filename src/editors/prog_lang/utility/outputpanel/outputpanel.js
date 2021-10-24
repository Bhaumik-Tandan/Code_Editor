import React from 'react';
import "./outputpanel.css";
import OutputConsole from './outputConsole/outputConsole';
function OutputPanel() {
    return (
        <div className="output">
            <center><h1>OUTPUT</h1></center>
            <OutputConsole/>
        </div>
        
    )
}

export default OutputPanel;