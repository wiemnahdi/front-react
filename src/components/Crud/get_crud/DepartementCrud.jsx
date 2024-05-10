import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import AddForm from '../add_crud/AddDepartmentForm'; // Mise à jour du chemin d'importation
import ShowPopupDetails from '../show/ShowPopupDepartementDetails'; // Mise à jour du chemin d'importation
import EditPopupDetails from '../edit_crud/EditPopupDepartmentDetails'; // Mise à jour du chemin d'importation
import DeleteConfirmationPopup from '../delete_crud/DeleteDepartmentConfirmationPopup';
import { useContext, useEffect, useState } from 'react';
import './crud.css';

import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';
import { server_uri } from '../../../config/config';

function CrudPage() {

  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  const [itemsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const handleShowPopup = (item) => {
    setPopupInfo(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editPopupInfo, setEditPopupInfo] = useState({});

  const handleShowEditPopup = (item) => {
    setEditPopupInfo(item);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => setShowEditPopup(false);

  const handleAdd = async ({ nomDepart, chefDepart }) => {
    handleCloseForm();
    try {
      // Convertir chefDepart en entier si nécessaire
      chefDepart = parseInt(chefDepart);
      const response = await axios.post(`${server_uri}/departement`, { nomDepart, chefDepart }, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
      setData([...data, response.data]);
    } catch (err) {
      console.error(err);
    }
  };
  

const [chefs, setChefs] = useState([]);

const [allTeams,setAllTeams] = useState([]);


const handleUpdateData = async (id, { nomDepart, chefDepart, deselectedTeams ,selectedTeams}) => {
  console.log({ nomDepart, chefDepart, deselectedTeams ,selectedTeams});

  const newChef = chefs.find(chef => chef.id == chefDepart);
  const newTeams = allTeams.filter(team => selectedTeams.includes(team.id));
  
  const newData = data.map(item => {
    if (item.id === id) {
      return { ...item, nomDepart, chefDepart:newChef, teams:newTeams };
    }
    return item;
  });

  console.log(newData)

  setData(newData); // Update the state with the modified data

  try {
    const response = await axios.put(`${server_uri}/departement/${id}`, { nomDepart, chefDepart, teams:selectedTeams,deselectedTeams}, {
      headers: {
        Authorization: `Bearer ${currentUser}`
      }
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};


  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    const newData = data.filter(item => item.id !== itemToDelete.id);
    setData(newData);
    setShowDeleteConfirmation(false);
    try {
      await axios.delete(`${server_uri}/departement/${itemToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${server_uri}/departement`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setData(response.data);
        setChefs(response.data[0]?.chefs)
        
      } catch (err) {
        console.error(err);
      }
    };

    const getAllTeams = async () => {
      try {
       
        const response = await axios.get(`${server_uri}/team`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setAllTeams(response.data);
       
 
      } catch (err) {
        console.error(err);
      }
    };
    getData();

    getAllTeams();
  }, []);

 

  return (
    <div className="table-wrapper mt-5 ms-3 me-3">
      <h4>Departments</h4>
      <div className=" d-flex justify-content-end mb-3 ">
        <Button className='me-3' variant="primary" onClick={handleShowForm}>Create</Button>
      </div>
      <AddForm show={showForm} handleClose={handleCloseForm} allTeamsData={allTeams} chefs={chefs} handleAdd={handleAdd} />

      <Table striped bordered hover border={3} className='table-container rounded-table'>
        <thead className='th thead-light'>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Demartement Head</th>
            <th>Teams</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nomDepart}</td>
              <td>{item.chefDepart.username}</td>
              <td>
                <ul>
                  {item.teams?.map((team) => (
                    <li key={team.id}>{team.nom}</li>
                  ))}
                </ul>
              </td>
              <td>
                <Button variant="warning" className='ms-1 mb-1 sh' onClick={() => handleShowPopup(item)}>Show</Button>{' '}
                <Button variant="success" className='ms-1 mb-1 mo' onClick={() => handleShowEditPopup(item)}>Update</Button>{' '}
                <Button variant="danger" className='ms-1 mb-1 su' onClick={() => handleDelete(item)}>delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ShowPopupDetails show={showPopup} handleClose={handleClosePopup} data={popupInfo} />
      <EditPopupDetails show={showEditPopup} handleClose={handleCloseEditPopup} data={editPopupInfo} allTeamsData={allTeams} handleSave={handleUpdateData} />
      <DeleteConfirmationPopup
        show={showDeleteConfirmation}
        handleClose={() => setShowDeleteConfirmation(false)}
        handleConfirm={handleConfirmDelete}
        data={itemToDelete}
      />

      <div className="pagination">
        <Pagination>
          <Pagination.Prev onClick={goToPrevPage} disabled={currentPage === 1} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={goToNextPage} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </div>
  );
}

export default CrudPage;
