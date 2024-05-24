import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import AddForm from '../add_crud/AddDepartmentForm'; // Mise à jour du chemin d'importation
import ShowPopupDetails from '../show/ShowPopupUserDetails'; // Mise à jour du chemin d'importation
import EditPopupDetails from '../edit_crud/EditPopupUserDetails'; // Mise à jour du chemin d'importation
import DeleteConfirmationPopup from '../delete_crud/deleteUserConfirmationPopup';
import { useContext, useEffect, useState } from 'react';
import './crud.css';

import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';
import { server_uri } from '../../../config/config';
import { useNavigate } from 'react-router-dom';

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
const navigate = useNavigate()
  const handleAddUser = () => navigate('/addUser');
 

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

  

const [chefs, setChefs] = useState([]);

const [allTeams,setAllTeams] = useState([]);


const handleUpdateData = async (id, {firstname,lastname,email,password,role} ) => {
 
  
  const updateFields = (item, fieldsToUpdate) => {
    const updatedItem = { ...item };
    for (const [key, value] of Object.entries(fieldsToUpdate)) {
      if (value !== null && value !== undefined && value !== '') {
        updatedItem[key] = value;
      }
    }
    return updatedItem;
  };
  
  const newData = data.map(item => {
    if (item.id === id) {
      return updateFields(item, { firstname, lastname, email, password, role });
    }
    return item;
  });
  
  setData(newData);

  try {
     await axios.put(`${server_uri}/users/${id}`, {firstname,lastname,email,password,role}, {
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
    
    setShowDeleteConfirmation(false);
    try {
      await axios.delete(`${server_uri}/users/${itemToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
      setData(newData);
    } catch (err) {
      console.error(err);
      err.response?.data?alert(err.response?.data):alert("probleme when deleting user")
    }
  };

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${server_uri}/users`, {
          headers: {
            Authorization: `Bearer ${currentUser}`
          },
        });
        setData(response.data);
        
      } catch (err) {
        console.error(err);
      }
    };

   
    getData();
  }, []);


  return (
    <div className="table-wrapper mt-5 ms-3 me-3">
      <h4>Users</h4>
      <div className=" d-flex justify-content-end mb-3 ">
        <Button className='me-3' variant="primary" onClick={handleAddUser}>Add user</Button>
      </div>
      

      <Table striped bordered hover border={3} className='table-container rounded-table'>
        <thead className='th thead-light'>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
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
      <EditPopupDetails show={showEditPopup} handleClose={handleCloseEditPopup} data={editPopupInfo}  handleSave={handleUpdateData} />
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
