import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, data, handleSave }) {

 const[note,setNoteAssigne]=useState(data?.noteAssigne);


  const handleSaveChanges = () => {
    if(note>20 || note<0){
      alert('Note must be in [0..20]')
      return ;
    }
    
    handleSave(data?.id,note);
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
          <Form.Group controlId="formNom">
            <Form.Label>Competence</Form.Label>
            <Form.Control type="text" name="titre" placeholder="Title" value={ data?.competence.titre}  className="custom-input" readOnly />
          </Form.Group>

          <Form.Group controlId="formTeamLeader">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="Team Leader" value={data?.notedUser?.username} className="custom-input" readOnly />
          </Form.Group>

          <Form.Group controlId="formCreationDate">
            <Form.Label>Note</Form.Label>
            <Form.Control type="number" placeholder="Note" value={note} className="custom-input" onChange={(e)=>setNoteAssigne(e.target.value)} />
          </Form.Group>

         <Form.Group controlId="formTeamLeader">
            <Form.Label>Team Leader</Form.Label>
            <Form.Control type="text" placeholder="Team Leader" value={data?.teamLeader?.username} className="custom-input" readOnly />
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
