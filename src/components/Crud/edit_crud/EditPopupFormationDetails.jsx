import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, data, handleSave }) {

  const [nom, setNom] = useState('');

  useEffect(() => {
    // Mettre à jour le nom lorsque data?.nom change
    setNom(data?.nom );
  }, [data]);

  const handleChange = (e) => {
    setNom(e.target.value);
  };

  const handleSaveChanges = () => {
    handleSave(data?.id, nom);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" name="id" placeholder="ID" value={data?.id} readOnly />
          </Form.Group>
          {/* Utilisez nom comme valeur pour le champ de formulaire */}
          <Form.Group controlId="formNom">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="nom" placeholder="Title" value={nom} onChange={handleChange} className="custom-input" />
          </Form.Group>

          <Form.Group controlId="formTeamLeader">
            <Form.Label>Created By</Form.Label>
            <Form.Control type="text" placeholder="Team Leader" value={data?.createdBy?.username} className="custom-input" readOnly />
          </Form.Group>
          <Form.Group controlId="formCreationDate">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control type="text" placeholder="Creation Date" value={data?.dateCreation} className="custom-input" readOnly />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPopupDetails;
