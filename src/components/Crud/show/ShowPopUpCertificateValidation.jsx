import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteConfirmationPopup({ show, handleClose, handleConfirm, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Validate Certificate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure to valide certificate {data?.fileName} with id {data?.id} ?</p>
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
