import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}  >
      <Modal.Header closeButton >
        <Modal.Title>Formation Details</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
        <p>ID: {data?.id}</p>
        <p>Name: {data?.nom}</p>
        <p>Created By: {data?.createdBy.username}</p>
        <p>Creation Date: {data?.dateCreation}</p>
        <p>Verified: {data?.verified?'True':'False'}</p>
        {data?.verified && <p>Verified By: {data?.verifiedBy.username}</p> }
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Retour
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowPopupDetails;
