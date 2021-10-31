import React from 'react';

import OutputConsole from './outputConsole/outputConsole';
function OutputPanel() {
    return (
        <div className="output" style={{position:"absolute",top:"66%",left:"2.5%",width:"95%"}}>
            <center><h1>OUTPUT</h1></center>
            <OutputConsole/>
        </div>
        
    )
}

export default OutputPanel;
