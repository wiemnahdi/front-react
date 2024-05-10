import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddForm.css';

function AddForm({ show, handleClose,handleAdd}) {
  const [title, setTitle] = useState('');

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Formation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formId" className="input-container">
            <Form.Label>Formation Name</Form.Label>
            <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="button-container mt-2 ">
          <Button variant="primary" onClick={()=>handleAdd(title)} className="btn-primary ">ADD</Button>
          <Button variant="secondary" onClick={handleClose} className="mr-2 ms-2">Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddForm;
