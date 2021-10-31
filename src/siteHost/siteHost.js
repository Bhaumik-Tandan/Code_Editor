import React from 'react';
import {useParams} from 'react-router-dom';
import SiteView from './siteView/siteView';
function SiteHost() {
    let {id} = useParams();
    return (
        <SiteView id={id}/>
    )
}

export default SiteHost;
