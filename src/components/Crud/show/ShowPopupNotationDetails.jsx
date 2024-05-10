import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Note Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {data?.id}</p>
        <p>Competence: {data?.competence.titre}</p>
        <p>Note: {data?.noteAssigne}</p>
        <p>User: {data?.notedUser.username}</p>
        <p>Team Leader: {data?.teamLeader.username}</p>
        <p>Verified: {data?.verified?'True' : 'False'}</p>
        {data?.verified&& <p>Verified By: {data?.verifiedBy.username}</p> }
         
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
