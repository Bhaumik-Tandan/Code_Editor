import Modal from 'react-bootstrap/Modal';
import Button from '@restart/ui/esm/Button';
import useFetch from 'use-http';
import { useState,useEffect } from 'react';


const URI=require("../../settings.json")["shareCodePostLink"];

function Box(props) {
  const {post, loading, error } = useFetch(URI); 
  const [link, setLink] = useState();


  useEffect(() => {

    async function postData() {
      const response = await post(props.code);
      setLink(window.location.href+response.$oid);
    }

    postData();   
  }, []);


    return (
        <Modal
        show={props.show}
        onHide={props.handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {loading?<>Posting code</>:<> Go to the following link to see your website on full page
         <a target="_blank" href={link}>{link}</a>
        <Button onClick={props.handleClose}>Close</Button></>
        }

      </Modal>
    )
}

export default Box;
