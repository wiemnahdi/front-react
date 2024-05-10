import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddForm.css';

function AddForm({ show, handleClose, chefs, handleAdd }) {
  const [nomDepart, setNomDepart] = useState('');
  const [chefDepart, setChefDepart] = useState('');
 




  const handleChefChange = (e) => {
    setChefDepart(e.target.value);
  };

  const handleAddDepartement = () => {

    if (nomDepart=='') {
      alert('Please enter a department name');
      return;
    }
    if (!chefDepart) {
      alert('Please select a department head');
      return;
    }

    // Appel à la fonction handleAdd avec les données nécessaires
    handleAdd({
      nomDepart,
      chefDepart,
    });

    handleClose()

  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Departement</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDepartName" className="input-container">
            <Form.Label>Departement name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              value={nomDepart}
              onChange={(e) => setNomDepart(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formChefDepart" className="input-container">
            <Form.Label>Department Head</Form.Label>
            <Form.Control
              as="select"
              value={chefDepart}
              onChange={handleChefChange}
            >
              <option value="">Choose...</option>
              {chefs?.map((chef) => (
                <option key={chef.id} value={chef.id}>{chef.email}</option>
              ))}
            </Form.Control>
          </Form.Group>

          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="button-container mt-2">
          <Button variant="primary" onClick={handleAddDepartement} className="btn-primary">
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
