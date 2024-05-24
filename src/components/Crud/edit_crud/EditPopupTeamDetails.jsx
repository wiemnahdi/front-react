import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, data, allDepartementsData, allEmployesData, handleSave }) {
  const [nom, setNom] = useState('');
  const [departement, setDepartement] = useState('');
  const [employes, setEmployes] = useState([]);
  const [initiallySelectedEmployes, setInitiallySelectedEmployes] = useState([]);

  // Update state when data changes
  useEffect(() => {
    if (data) {
      setNom(data.nom || '');
      setDepartement(data.departement?.id || '');
      const employeIds = data.employes ? data.employes.map(employe => employe.id) : [];
      setEmployes(employeIds);
      setInitiallySelectedEmployes(employeIds);
    }
  }, [data]);

  const handleDepartementChange = (e) => {
    setDepartement(e.target.value);
  };

  const handleEmployeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setEmployes(selectedOptions);
  };

  const handleSaveChanges = () => {
    const deselectedEmployes = initiallySelectedEmployes.filter(id => !employes.includes(id));
    const updatedData = {
      nom,
      departement,
      employes,
      deselectedEmployes
    };
    handleSave(data?.id, updatedData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="ID" value={data?.id} readOnly />
          </Form.Group>
          <Form.Group controlId="formNom">
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter team name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDepartement" className="input-container">
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

          <Form.Group controlId="formEmployes" className="input-container">
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
