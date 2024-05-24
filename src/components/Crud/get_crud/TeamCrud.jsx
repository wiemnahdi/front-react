import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import AddForm from '../add_crud/AddTeam'; 
import ShowPopupDetails from '../show/ShowPopupTeamDetails'; 
import EditPopupDetails from '../edit_crud/EditPopupTeamDetails'; 
import DeleteConfirmationPopup from '../delete_crud/DeleteTeamConfirmationPopup';
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

  const handleAdd = async ({
    nom,
    departement,
    employes 
  }) => {

    console.log({
      nom,
      departement,
      employes 
    })
    handleCloseForm();
    try {
      const response = await axios.post(`${server_uri}/team`, {
        nom,
        departement,
        employes 
      }, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
      setData([...data, response.data]);
    } catch (err) {
      console.error(err);
    }
  };
  

const [allEmployes,setAllEmployes] = useState([]);
const [allDepartements,setAllDepartements] = useState([]);

const handleUpdateData = async (id, {
    nom,
    departement,
    employes,
    deselectedEmployes
  }) => {


  const newDepartement = allDepartements.find(dep => dep.id == departement);
  const newEmployes = allEmployes.filter(employe => employes.includes(employe.id));
  
  const newData = data.map(item => {
    if (item.id === id) {
      return { ...item, nom, departement:newDepartement, employes:newEmployes };
    }
    return item;
  });

  setData(newData); // Update the state with the modified data

  try {
    await axios.put(`${server_uri}/team/${id}`, { nom,departement,employes}, {
      headers: {
        Authorization: `Bearer ${currentUser}`
      }
    });
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
      await axios.delete(`${server_uri}/team/${itemToDelete.id}`, {
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
        const response = await axios.get(`${server_uri}/team`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const getAllEmployees = async () => {
      try {
       
        const response = await axios.get(`${server_uri}/users/employe`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setAllEmployes(response.data);
       
 
      } catch (err) {
        console.error(err);
      }
    };

    const getAllDepartement = async () => {
        try {
         
          const response = await axios.get(`${server_uri}/departement`, {
            headers: {
              Authorization: `Bearer ${currentUser}`
            },
          });
          setAllDepartements(response.data);
         
   
        } catch (err) {
          console.error(err);
        }
      };


    getData();

    getAllEmployees();
    getAllDepartement();
  }, []);

  return (
    <div className="table-wrapper mt-5 ms-3 me-3">
      <h4>Teams</h4>
      <div className=" d-flex justify-content-end mb-3 ">
        <Button className='me-3' variant="primary" onClick={handleShowForm}>Create</Button>
      </div>
      <AddForm show={showForm} handleClose={handleCloseForm} allEmployesData={allEmployes} allDepartementsData={allDepartements} handleAdd={handleAdd} />

      <Table striped bordered hover border={3} className='table-container rounded-table'>
        <thead className='th thead-light'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Team Leader</th>
            <th>Creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.teamLeader.username}</td>
              <td>
                {item.dateCreation}
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
      <EditPopupDetails show={showEditPopup} handleClose={handleCloseEditPopup} data={editPopupInfo} allDepartementsData={allDepartements} allEmployesData={allEmployes} handleSave={handleUpdateData} />
      
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
