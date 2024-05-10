import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Department Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {data?.id}</p>
        <p>Department Name: {data?.nomDepart}</p>
        <p>Department Head: {data?.chefDepart.username}</p>
        <p>Teams:</p>
        <ul>
          {data?.teams?.map((team, index) => (
            <li key={index}>{team.nom}</li>
          ))}
        </ul>
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
