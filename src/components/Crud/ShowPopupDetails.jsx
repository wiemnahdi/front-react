import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ShowPopupDetails.css';

function ShowPopupDetails({ show, handleClose, id, nom }) {
  return (
    <Modal show={show} onHide={handleClose}  >
      <Modal.Header closeButton >
        <Modal.Title>Détails du département</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
        <p>ID: {id}</p>
        <p>Nom: {nom}</p>
       
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
