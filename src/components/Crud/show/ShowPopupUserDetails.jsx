import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ShowPopupDetails({ show, handleClose, data }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {data?.id}</p>
        <p>First Name: {data?.firstname}</p>
        <p>Last Name: {data?.lastname}</p>
        <p>Email: {data?.email}</p>
        <p>Role: {data?.role}</p>
        <p>Enabled: {data?.enabled==true?'true':'false'}</p>
        <p>AccountNonExpired: {data?.accountNonExpired==true?'true':'false'}</p>
        <p>AccountNonLocked: {data?.accountNonLocked==true?'true':'false'}</p>
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
