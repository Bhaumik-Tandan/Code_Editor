import React,{useState} from 'react'
import TextEditor from '../textEditor/textEditor';
const settings=require("./settings.json");
const docTemplate=(html,css,js)=>`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`;
const empty=(v)=>v?v:"";
function Web() {

    const [html,setHTML]=useState(empty(localStorage["html"]));
    const [css,setCSS]=useState(empty(localStorage["css"]));
    const [js,setJS]=useState(empty(localStorage["js"]));

    return (
        <div>
            <TextEditor settings={{...settings["html"]}} localStorageName={"html"} setFun={setHTML}/>
            <TextEditor settings={{...settings["css"]}} localStorageName={"css"} setFun={setCSS}/>
            <TextEditor settings={{...settings["js"]}} localStorageName={"js"} setFun={setJS}/>
            <div  style={{
            position: "absolute",
            top: "62vh",
            left: "1vw",
            right: "1vw"
          }}>
          <center><h3>PREVIEW</h3></center>
          <iframe 
            srcdoc={docTemplate(html,css,js)}
            width="100%" ></iframe>
        </div>
        </div>
    )
}

export default Web;
