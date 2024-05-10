import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import AddForm from '../add_crud/AddCompetenceForm';
import ShowPopupDetails from '../show/ShowPopupCompetenceDetails';
import EditPopupDetails from '../edit_crud/EditPopupCompetenceDetails';
import DeleteConfirmationPopup from '../delete_crud/DeleteCompetenceConfirmationPopup';
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

  //Ajouter
  const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire
  const handleShowForm = () => setShowForm(true); // Fonction pour afficher le formulaire
  const handleCloseForm = () => setShowForm(false); // Fonction pour fermer le formulaire

  //Show  
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const handleShowPopup = (item) => {
    setPopupInfo(item);
    setShowPopup(true);
  };
  // Fonction pour fermer le popup de détails
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

  const handleAdd = async (title) => {

    handleCloseForm()

    try {
      const response = await axios.post(`${server_uri}/competence`, { titre: title }, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
      console.log(response)
      setData([response.data, ...data])
    } catch (err) {
      console.error(err);
    }


  }
  const handleUpdateData = async (id, title) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, titre: title };
      }

      return item;
    });
    setData(newData);
    try {
      await axios.put(`${server_uri}/competence/${id}`, { titre: title }, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        },
      });
    } catch (err) {
      console.error(err);
    }

    handleCloseEditPopup();
  };
  // Fonction pour gérer la suppression d'un département
  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };

  // Fonction pour confirmer la suppression d'un département
  const handleConfirmDelete = async () => {
    const newData = data.filter(item => item.id !== itemToDelete.id);
    setData(newData);
    setShowDeleteConfirmation(false);

    //request delete data 

    try {
      await axios.delete(`${server_uri}/competence/${itemToDelete.id}`, {
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
        const response = await axios.get(`${server_uri}/competence`, {
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
      <h4>Competences</h4>
      <div className=" d-flex justify-content-end mb-3 ">
        <Button className='me-3' variant="primary" onClick={handleShowForm}>Create</Button>
      </div>
      <AddForm show={showForm} handleClose={handleCloseForm} handleAdd={handleAdd} />

      <Table striped bordered hover border={3} className='table-container rounded-table'>
        <thead className='th thead-light'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>TEAM_LEADER</th>
            <th>Creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.titre}</td>
              <td>{item.teamLeader?.username}</td>
              <td>{item.dateCreation}</td>
              <td>
                <Button variant="warning" className='ms-1 mb-1 sh' onClick={() => handleShowPopup(item)}>Show</Button>{' '}
                <Button variant="success" className='ms-1  mb-1  mo' onClick={() => handleShowEditPopup(item)}>update</Button>{' '}
                <Button variant="danger" className='ms-1  mb-1  su' onClick={() => handleDelete(item)}>delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ShowPopupDetails show={showPopup} handleClose={handleClosePopup} data={popupInfo} />
      <EditPopupDetails show={showEditPopup} handleClose={handleCloseEditPopup} data={editPopupInfo} handleSave={handleUpdateData} />
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





