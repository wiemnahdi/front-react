import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, data, handleSave }) {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    repeatPassword: ''
  });

  const [originalData, setOriginalData] = useState({});
  const [error, setError] = useState(null);

  // Update state when data changes
  useEffect(() => {
    if (data) {
      setUser({
        firstname: data.firstname || '',
        lastname: data.lastname || '',
        email: data.email || '',
        password: '',
        role: data.role || '',
        repeatPassword: ''
      });
      setOriginalData(data);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    if (user.password !== user.repeatPassword) {
      setError("Passwords do not match");
      setTimeout(() => {
        setError(null);
      }, 4000);
      return;
    }

    // Create an object with only the modified fields
    const updatedFields = {};
    for (let key in user) {
      if (user[key] !== originalData[key]) {
        updatedFields[key] = user[key];
      }
    }

    // If the password is provided, include it in the update
    if (user.password) {
      updatedFields.password = user.password;
    }

    handleSave(data?.id, updatedFields);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {error && (
            <Form.Group className='mb-2 bg-warning'>
              <div className="text-danger">{error}</div>
            </Form.Group>
          )}
          <Form.Group controlId="formFirstname" className='mb-2'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder='First Name'
              value={user.firstname}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formLastname" className='mb-2'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder='Last Name'
              value={user.lastname}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mb-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder='Email'
              value={user.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formRole" className='mb-2'>
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={user.role}
              onChange={handleInputChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="DEPARTEMENT_CHEF">Departement Chef</option>
              <option value="TEAM_LEADER">Team Leader</option>
              <option value="EMPLOYE">Employe</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formPassword" className='mb-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formRepeatPassword" className='mb-2'>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={user.repeatPassword}
              onChange={handleInputChange}
            />
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
