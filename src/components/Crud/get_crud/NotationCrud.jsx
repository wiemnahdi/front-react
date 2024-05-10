import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

import ShowPopupDetails from '../show/ShowPopupNotationDetails';
import ConfirmationPopup from '../show/ShowPopupNotationValidation';
import EditPopupDetails from '../edit_crud/EditPopupNotationDetails';
import { useContext, useEffect, useState } from 'react';
import './crud.css';

import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext';
import { server_uri } from '../../../config/config';

import AddForm from '../add_crud/AddNoteForm';

function CrudPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [employees, setEmployess] = useState([]);
    const [competences, setCompetences] = useState([]);

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


    //Show  
    const [showPopup, setShowPopup] = useState(false);
    const [popupInfo, setPopupInfo] = useState(null);

    //add
    
    const [showAdd, setShowAdd] = useState(false);

    const handleShowPopup = (item) => {
        setPopupInfo(item);
        setShowPopup(true);
    };

    const handleShowEditPopupDetails = (item) => {
        setPopupInfo(item);
        setShowEditPopupDetails(true);
    };
    // Fonction pour fermer le popup de détails
    const handleClosePopup = () => setShowPopup(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showEditPopupDetails, setShowEditPopupDetails] = useState(false);

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
            await axios.put(`${server_uri}/certificate/${itemToValidate.id}/validate`, {}, {
                headers: {
                    'Authorization': `Bearer ${currentUser}`,
                    'Content-Type': 'application/json'
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    const handleSave = async ({ noteAssigne, competence, employee }) => {
        console.log({ noteAssigne, competence, employee })
        try {
          const response  = await axios.post(`${server_uri}/notation/${employee}/${competence}`, { noteAssigne}, {
            headers: {
              Authorization: `Bearer ${currentUser}`
            },
          });
          setData([response.data,...data])
        } catch (err) {
          console.error(err);
        }
    
        setShowEditPopupDetails(false);
      };

    const handleUpdateData = async (id, note) => {
        const newData = data.map(item => {
          if (item.id === id) {
            return { ...item, noteAssigne:note };
          }
    
          return item;
        });
        setData(newData);
        try {
          await axios.put(`${server_uri}/notation/${id}`, { note }, {
            headers: {
              Authorization: `Bearer ${currentUser}`
            },
          });
        } catch (err) {
          console.error(err);
        }
    
        setShowEditPopupDetails(false);
      };

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${server_uri}/notation`, {
                    headers: {
                        Authorization: `Bearer ${currentUser}`
                    },
                });
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        const getCompetences = async () => {
            try {
                const response = await axios.get(`${server_uri}/competence`, {
                    headers: {
                        Authorization: `Bearer ${currentUser}`
                    },
                });
                setCompetences(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        const getEmployees = async () => {
            try {
                const response = await axios.get(`${server_uri}/users/employe`, {
                    headers: {
                        Authorization: `Bearer ${currentUser}`
                    },
                });
                setEmployess(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        getData();
        getCompetences()
        getEmployees()
    }, []);



    return (
        <div className="table-wrapper mt-5 ms-3 me-3">
            <h4>Notation</h4>
            <div className=" d-flex justify-content-end mb-3 ">
                <Button className='me-3' variant="primary" onClick={()=>setShowAdd(true)}>Create</Button>
            </div>


            <Table striped bordered hover border={3} className='table-container rounded-table'>
                <thead className='th thead-light'>
                    <tr>
                        <th>ID</th>
                        <th>Competence</th>
                        <th>Note</th>
                        <th>User</th>
                        <th>Verified</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.competence.titre}</td>
                            <td>{item.noteAssigne}</td>
                            <td>{item.notedUser.email}</td>
                            <td>{item.verified ? 'True' : 'false'}</td>



                            <td>
                                <Button variant="warning" className='ms-1 mb-1 sh' onClick={() => handleShowPopup(item)}>Show</Button>
                                

                                {!item.verified &&
                                <>
                                     <Button variant="success" className='ms-1 mb-1 sh' onClick={() => handleShowEditPopupDetails(item)}>Update</Button>
                                    <Button variant="danger" className='ms-1  mb-1  su' onClick={() => handleConfirm(item)} disabled={item.verified} >validate</Button>
                                </>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showPopup && <ShowPopupDetails show={showPopup} handleClose={handleClosePopup} data={popupInfo} />}
            
            <AddForm
                show={showAdd}
                handleClose={() => setShowAdd(false)}
                handleSave={handleSave}
                competences={competences}
                employees={employees}
            />
            
            <ConfirmationPopup
                show={showConfirmation}
                handleClose={() => setShowConfirmation(false)}
                handleConfirm={handleValidateCertificate}
                data={itemToValidate}
            />
            <EditPopupDetails
                show={showEditPopupDetails}
                handleClose={() => setShowEditPopupDetails(false)}
                data={popupInfo}
                handleSave={handleUpdateData}
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
