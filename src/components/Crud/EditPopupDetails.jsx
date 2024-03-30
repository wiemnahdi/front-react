import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, id: initialId, nom: initialNom, handleSave }) {
  const [id, setId] = useState(initialId);
  const [nom, setNom] = useState(initialNom);

  const handleIdChange = (e) => setId(e.target.value);
  const handleNomChange = (e) => setNom(e.target.value);

  const handleSaveChanges = () => {
    handleSave(id, nom);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifier les données</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="ID" value={id} onChange={handleIdChange} className="custom-input" />
          </Form.Group>
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text"  placeholder="Nom"value={nom} onChange={handleNomChange} className="custom-input" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={handleSaveChanges}>
          Enregistrer
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
    
      </Modal.Footer>
    </Modal>
  );
}

export default EditPopupDetails;
