import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddForm.css';

function AddForm({ show, handleClose, allEmployesData, allDepartementsData, handleAdd }) {
  const [nom, setNom] = useState('');
  const [departement, setDepartement] = useState('');
  const [employes, setEmployes] = useState([]); // Changed to an array to handle multiple employees

  const handleDepartementChange = (e) => {
    setDepartement(e.target.value);
  };

  const handleEmployeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setEmployes(selectedOptions);
  };

  const handleAddTeam = () => {
    if (nom === '') {
      alert('Please enter a team name');
      return;
    }
    if (!departement) {
      alert('Please select a department');
      return;
    }

    
    handleAdd({
      nom,
      departement,
      employes 
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTeamName" className="input-container">
            <Form.Label>Team name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter team name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDepartment" className="input-container">
            <Form.Label>Department</Form.Label>
            <Form.Control
              as="select"
              value={departement}
              onChange={handleDepartementChange}
            >
              <option value="">Choose...</option>
              {allDepartementsData?.map((departement) => (
                <option key={departement.id} value={departement.id}>{departement.nomDepart}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formEmployees" className="input-container">
            <Form.Label>Employees</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={employes}
              onChange={handleEmployeChange}
            >
              {allEmployesData?.map((employe) => (
                <option key={employe.id} value={employe.id}>{employe.username}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="button-container mt-2">
          <Button variant="primary" onClick={handleAddTeam} className="btn-primary">
            ADD
          </Button>
          <Button variant="secondary" onClick={handleClose} className="mr-2 ms-2">
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
