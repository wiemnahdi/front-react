import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Team Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {data?.id}</p>
        <p>Team Name: {data?.nom}</p>
        <p>Departement: {data?.departement.nomDepart}</p>
        <p>Team Leader: {data?.teamLeader.username}</p>
        <p>Creation Date: {data?.dateCreation}</p>
        <p>Members : </p>
        <ul>
          {data?.employes?.map((employe, index) => (
            <li key={index}>{employe.username}</li>
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
