import React from 'react'
import DOMPurify from "dompurify";
import useFetch from 'use-http';
import NotFound from './util/error';
import Loading from './util/loading';
import "./siteView.css";

const docTemplate=(html,css,js)=>`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`;
const getHook="https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/onlinecompiler-qnuay/service/CodeShare/incoming_webhook/GetCode?id=";

function SiteView(props) {
    const { data, loading, error } = useFetch(getHook+props.id,{}, []);    
    return (
    <>
        {error? <NotFound/>:
        loading?<Loading/> :
            <iframe id="view" frameBorder="0" srcdoc={docTemplate(DOMPurify.sanitize(data[0].html),data[0].css,data[0].js)}></iframe>
        }
    </>
    )
}

export default SiteView;
