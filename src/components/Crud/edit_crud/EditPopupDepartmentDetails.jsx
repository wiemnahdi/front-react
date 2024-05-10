import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EditPopupDetails.css';

function EditPopupDetails({ show, handleClose, data, allTeamsData, handleSave }) {

  const [nomDepart, setNomDepart] = useState("");
  const [chefDepartId, setChefDepartId] = useState("");
  const [chefsDeparts, setChefsDeparts] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [teams, setTeams] = useState([]);
  const [initiallySelectedTeams, setInitiallySelectedTeams] = useState([]);

  // Update state when data changes
  useEffect(() => {
    setNomDepart(data?.nomDepart);
    setChefDepartId(data?.chefDepart?.id);
    setSelectedTeams(data?.teams ? data.teams.map(team => team.id) : []);
    setInitiallySelectedTeams(data?.teams ? data.teams.map(team => team.id) : []);
    setChefsDeparts(data?.chefs);
    setTeams(allTeamsData);
  }, [data]);

  const handleSaveChanges = () => {
    const deselectedTeams = initiallySelectedTeams.filter(teamId => !selectedTeams.includes(teamId));
    const updatedData = { nomDepart, chefDepart: chefDepartId, deselectedTeams, selectedTeams };
    handleSave(data?.id, updatedData);
    handleClose();
  };

  const handleTeamChange = (teamId) => {
    const index = selectedTeams.indexOf(teamId);
    if (index === -1) {
      setSelectedTeams([...selectedTeams, teamId]);
    } else {
      setSelectedTeams(selectedTeams.filter((item) => item !== teamId));
    }
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
            <Form.Label>Department Name</Form.Label>
            <Form.Control type="text" name="titre" placeholder="Enter department name" value={nomDepart} onChange={(e) => setNomDepart(e.target.value)} className="custom-input" />
          </Form.Group>

          <Form.Group controlId="formChefDepart" className="input-container">
            <Form.Label>Department Head</Form.Label>
            <Form.Control
              as="select"
              value={chefDepartId}
              onChange={(e) => setChefDepartId(e.target.value)}
            >
              <option disabled>Choose...</option>
              {chefsDeparts?.map((chef) => (
                <option key={chef.id} value={chef.id}>{chef.email}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formTeamCheckboxes" className="input-container">
            <Form.Label>Select Teams (Optional)</Form.Label>
            {teams?.map((team) => (
              <Form.Check
                key={team.id}
                type="checkbox"
                label={team.nom}
                checked={selectedTeams.includes(team.id)}
                onChange={() => handleTeamChange(team.id)}
              />
            ))}
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
