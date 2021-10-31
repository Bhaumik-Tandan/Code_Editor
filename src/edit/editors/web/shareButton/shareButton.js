import React,{useState} from 'react';
import Box from './box/box';
function ShareButton(props) {

    const [isShared, setIsShared] = useState(false);

    const share = () => {
        setIsShared(p=>!p);
    }


    return (
        <>
        <center>
            <button onClick={share}>Share</button>
        </center>
        {isShared?<Box show={isShared} code={props.code} handleClose={share}/>:null}
        </>
        
    )
}

export default ShareButton;
