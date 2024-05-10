import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddForm.css'; // Importation du fichier CSS
import { FaTimes, FaSave } from 'react-icons/fa';

function AddForm({ show, handleClose, competences, employees, handleSave }) {
  const [noteAssigne, setNoteAssigne] = useState(0);
  const [competence, setCompetence] = useState('');
  const [employee, setEmployee] = useState('');

  const handleSaveChanges = () => {
    if (!noteAssigne || noteAssigne > 20 || noteAssigne < 0) {
      alert('Note must be in [0..20]');
      return;
    }

    if (!competence) {
      alert('Select Competence');
      return;
    }
    if (!employee) {
      alert('Select Employee');
      return;
    }

    handleSave({ noteAssigne, competence, employee });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className='dark-modal'> {/* Ajout de la classe 'dark-modal' */}
      <Modal.Header>
        <Modal.Title>Add Note</Modal.Title>
        <FaTimes className='close-button' onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCompetence">
            <Form.Label>Competence</Form.Label>
            <Form.Control as="select" value={competence} onChange={(e) => setCompetence(e.target.value)} className="custom-input">
              <option value="">Select competence</option>
              {competences.map((option) => (
                <option key={option.id} value={option.id}>{option.titre}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formCreationDate">
            <Form.Label>Note</Form.Label>
            <Form.Control type="number" placeholder="noteAssigne" value={noteAssigne} className="custom-input" onChange={(e) => setNoteAssigne(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formEmployee">
            <Form.Label>Employee</Form.Label>
            <Form.Control as="select" value={employee} onChange={(e) => setEmployee(e.target.value)} className="custom-input">
              <option value="">Select employee</option>
              {employees.map((option) => (
                <option key={option.id} value={option.id}>{option.email}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleSaveChanges}>
          <FaSave />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
