import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

import ShowPopupFile from '../show/ShowPopupCertificateFile';
import ConfirmationPopup from '../show/ShowPopUpCertificateValidation';
import { useContext, useEffect, useState } from 'react';
import './crud.css';

import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';
import { server_uri } from '../../../config/config';
import UploadCertificate from '../add_crud/uploadCertificate';

import { RoleContext } from '../../../context/RoleContext';
function CrudPage() {

  const [currentPage, setCurrentPage] = useState(1);



  const [data, setData] = useState([]);

  const [itemsPerPage] = useState(10);

  const {currentRole} =useContext(RoleContext)



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


  //Show  
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);

  const handleShowPopup = (item) => {
    setPopupInfo(item);
    setShowPopup(true);
  };
  // Fonction pour fermer le popup de détails
  const handleClosePopup = () => setShowPopup(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToValidate, setItemToValidate] = useState(null);

  // Fonction pour gérer la suppression d'un département
  const handleConfirm = (item) => {
    setItemToValidate(item);
    setShowConfirmation(true);
  };

  // Fonction pour confirmer la suppression d'un département
  const handleValidateCertificate = async () => {
    const newData = data.map(item => {
      if (item.id === itemToValidate.id) {
        return { ...item, verified: true };
      }

      return item;
    });
    setData(newData);
    setShowConfirmation(false);

    //request validate data 

    try {
      await axios.put(`${server_uri}/certificate/${itemToValidate.id}/validate`,{}, {
        headers: {
          'Authorization': `Bearer ${currentUser}`,
          'Content-Type':  'application/json' 
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
        const response = await axios.get(`${server_uri}/certificate`, {
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

if(currentRole === 'EMPLOYE') {
  return <UploadCertificate/>
}

  return (
    <div className="table-wrapper mt-5 ms-3 me-3">
      <h4>Cerificates</h4>
      <div className=" d-flex justify-content-end mb-3 ">
        
      </div>
      

      <Table striped bordered hover border={3} className='table-container rounded-table'>
        <thead className='th thead-light'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Certif</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fileName}</td>
              <td>{item.user.email}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              
             
              <td><Button variant="secondary" className='ms-1 mb-1 sh' onClick={() => handleShowPopup(item)}>File</Button></td>
              <td>
                <Button variant="success" className='ms-1  mb-1  su'  onClick={() => handleConfirm(item)} disabled={item.verified} >validate</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showPopup&& <ShowPopupFile show={showPopup} handleClose={handleClosePopup} data={popupInfo} /> }
      <ConfirmationPopup
        show={showConfirmation}
        handleClose={() => setShowConfirmation(false)}
        handleConfirm={handleValidateCertificate}
        data={itemToValidate}
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





