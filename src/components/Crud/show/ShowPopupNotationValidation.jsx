import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteConfirmationPopup({ show, handleClose, handleConfirm, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Validate Notation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to validate the note {data?.noteAssigne} in the Competence {data?.competence?.titre} To the user {data?.notedUser.username} added by {data?.teamLeader.username} ?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteConfirmationPopup;
