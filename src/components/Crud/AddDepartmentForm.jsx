import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddDepartementForm.css';

function AddDepartmentForm({ show, handleClose }) {
  const [id, setId] = useState(''); // État pour l'ID du département
  const [nom, setNom] = useState(''); // État pour le nom du département

  const handleAddDepartment = () => {
    // Logique pour ajouter le département (à implémenter)
    console.log('Ajouter département avec ID:', id, 'et nom:', nom);
    setId(''); // Réinitialiser l'ID après l'ajout
    setNom(''); // Réinitialiser le nom après l'ajout
    handleClose(); // Fermer le formulaire après l'ajout
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter département</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId" className="input-container">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formNom" className="input-container">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <div className="button-container mt-2 ">
      <Button variant="primary" onClick={handleAddDepartment} className="btn-primary ">Ajouter</Button>
        <Button variant="secondary" onClick={handleClose} className="mr-2 ms-2">Retour</Button>
      
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddDepartmentForm;
