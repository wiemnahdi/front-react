import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}  >
      <Modal.Header closeButton >
        <Modal.Title>Competence Details</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
        <p>ID: {data?.id}</p>
        <p>Title: {data?.titre}</p>
        <p>Team Leader: {data?.teamLeader.username}</p>
        <p>Creation Date: {data?.dateCreation}</p>
       
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
