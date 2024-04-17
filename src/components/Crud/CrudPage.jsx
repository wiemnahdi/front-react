/*import React from 'react';
import { Link } from 'react-router-dom';
const CrudPage=()=>{
    return (
        <div className='departement-table'>
                <div className='card-title'>
                     <h3>Département</h3>
                </div>
                <Link to={"/add"} className='addButton'>Create</Link>
          <table border={2} cellPadding={10} cellSpacing={0} >
                        <thread> 
                     <tr className='tb'>
                       <th>ID</th>
                       <th>Nom</th>
                       <th>Action</th>
                     </tr>
                        </thread>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>département1</td>
                                <td className='actionButtons'>
                                    <button>Show</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>


                        </tbody>



                    </table>

                </div>

       

        );
    }
    export default CrudPage;*/


    /*import Table from 'react-bootstrap/Table';
    import './crud.css';
    import Button from 'react-bootstrap/Button';

    function CrudPage() {
      return (
   
        <div className="crud-container">
                 
                 <Button variant="primary" className='btn'>Ajouter</Button>
       
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Action</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td><Button variant="warning">Warning</Button>
              <Button variant="success">Success</Button>
              </td>
             
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td><td><Button variant="primary" className='btn'>Ajouter</Button></td></td>
              
             
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
             <td><td><Button variant="primary" className='btn'>Ajouter</Button></td></td>
              
            </tr>
            {/* <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> 
          </tbody>
        </Table>
        </div>
        
      );
    }
    
    export default CrudPage;*/




   /*import React, { useState } from "react";
  
    import Box from '@mui/material/Box';
    import "./crud.css";
    import Pagination  from "@mui/material/Pagination"
    import Button from '@mui/material/Button';
    


    const CrudPage = () => {
        const data = [
            {
                "id":1,
                "nom": "département1",
            },
            {
                "id":2,
                "nom": "département2",
            },
            {
                "id":3,
                "nom": "département3",
            },
            {
                "id":4,
                "nom": "département4",
            },
            {
                "id":5,
                "nom": "département5",
            },
            {
                "id":6,
                "nom": "département6",
            },
            {
                "id":7,
                "nom": "département7",
            },
            {
                "id":8,
                "nom": "département8",
            },
            {
                "id":9,
                "nom": "département9",
            },
            {
                "id":10,
                "nom": "département10",
            },
            {
                "id":11,
                "nom": "département11",
            },
            {
                "id":12,
                "nom": "département12",
            }
    
        ]



    //pagination 
    const items = 4 // nombre mt3 pagination 
    const [current, setCurrent] = useState(1)
    const NbPage = Math.ceil(data.length / items) //3 pages

    const startIndex = (current - 1) * items 
    const endIndex = startIndex + items
    
    const DataPerPage = data.slice(startIndex, endIndex) // ta3tyh intervale fi kol page 9adech 3andy data

    
  const HandleChange = (event, page)=>{
    setCurrent(page)


  }
        return(
            <div className="tout">
            
   
            <div className="crud-container">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2}}>
          
                 <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>Ajouter</Button>
         
                </Box>
           
          
               
                <table border={3}  className="table table-striped table-bordered"> 
                    <thead>
                        <tr className="text1">
                            <th>ID </th>
                            <th>NOM </th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                           DataPerPage.map(département =>
                                 <tr  key={département.id} className="text2">
                                    <td>{département.id}</td>
                                    <td>{département.nom}</td>
                                    <td>
                             
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button variant="contained" color="warning" className="sho" sx={{ mr: -6}}>Show</Button>
                                    <Button variant="contained" color="success" className="ed"  sx={{ mx: -6}}>Modifier</Button>
                                    <Button variant="contained" color="error" className="de"  sx={{ ml: -6 }}>Supprimer</Button>
                                    </Box>
                                 
                               
                                        </td>
                                  


                                 </tr>)
    }
                       <tr>
                        </tr> 
                    </tbody>
                </table>
             <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1}}>
                <Pagination count={NbPage} page={current} onChange={HandleChange} color="primary"/>
             </Box>

            

            </div>
          
            </div>

  


        )


    }
    export default CrudPage;*/

    /*import Table from 'react-bootstrap/Table';
    import Pagination  from "@mui/material/Pagination"
    import Button from '@mui/material/Button';
    import Box from '@mui/material/Box';
    import './crud.css';
    const data = [
        {
            "id":1,
            "nom": "département1",
        },
        {
            "id":2,
            "nom": "département2",
        },
        {
            "id":3,
            "nom": "département3",
        },
        {
            "id":4,
            "nom": "département4",
        },
        {
            "id":5,
            "nom": "département5",
        },
        {
            "id":6,
            "nom": "département6",
        },
        {
            "id":7,
            "nom": "département7",
        },
        {
            "id":8,
            "nom": "département8",
        },
        {
            "id":9,
            "nom": "département9",
        },
        {
            "id":10,
            "nom": "département10",
        },
        {
            "id":11,
            "nom": "département11",
        },
        {
            "id":12,
            "nom": "département12",
        }

    ]

    function CrudPage() {

  
      return (
        
        <div className="table-container">
                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 80}}>
          
          <Button variant="contained" color="primary" className='aj'>Ajouter</Button>
  
         </Box>
    
       
        <Table striped bordered hover size="sm" border={3}  >
            
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
               <th>ACTION</th>
             
            </tr>
          </thead>
          <tbody>
          {
     data.map(département =>
            <tr  key={département.id} className="text2">
               <td>{département.id}</td>
               <td>{département.nom}</td>
               <td>
        
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <Button variant="contained" color="warning" className="sho" sx={{ mr: -6}}>Show</Button>
               <Button variant="contained" color="success" className="ed"  sx={{ mx: -6}}>Modifier</Button>
               <Button variant="contained" color="error" className="de"  sx={{ ml: -6 }}>Supprimer</Button>
               </Box>
            
          
                   </td>
             


            </tr>)
}
  <tr>
   </tr> 
          </tbody>
        </Table>
      
       
        </div>
      );
    }
    
    export default CrudPage;*/


/*import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './crud.css';

function CrudPage() {
  return (
    
    <div className="table-wrapper">   
    

    <Table striped bordered hover border={3} className='table-container'>
      <thead className='th'>
        <tr>
          <th>ID</th>
          <th>NOM</th>
          <th>ACTION</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>département1</td>
          <td>
          <Button variant="warning" className='ms-1'>Show</Button>{' '} 
    
          <Button variant="success" className='ms-1'>Modifier</Button>{' '}
   
          <Button variant="danger" className='ms-1'>Supprimer</Button>
          </td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>département2</td>
          <td className="action-buttons">
          <Button variant="warning" className='ms-1'>Show</Button>{' '} 
    
    <Button variant="success" className='ms-1'>Modifier</Button>{' '}

    <Button variant="danger" className='ms-1'>Supprimer</Button>
          </td>
         
        </tr>

        <tr>
          <td>3</td>
          <td>département3</td>
          <td className="action-buttons">
          <Button variant="warning" className='ms-1'>Show</Button>{' '} 
    
    <Button variant="success" className='ms-1'>Modifier</Button>{' '}

    <Button variant="danger" className='ms-1'>Supprimer</Button>
          </td>
         
        </tr>

        <tr>
          <td>4</td>
          <td>département4</td>
          <td>
          <Button variant="warning" className='ms-1'>Show</Button>{' '} 
    
    <Button variant="success" className='ms-1'>Modifier</Button>{' '}

    <Button variant="danger" className='ms-1'>Supprimer</Button>
          </td>
         
        </tr>
        
      </tbody>
    </Table>
   
    </div>
  );
}

export default */

/*import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import './crud.css';

function CrudPage() {
  // Définir l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Nombre d'éléments par page

  // Données de votre tableau
  const data = [
    { id: 1, nom: 'département1' },
    { id: 2, nom: 'département2' },
    { id: 3, nom: 'département3' },
    { id: 4, nom: 'département4' },
    { id: 5, nom: 'département5' },
    { id: 6, nom: 'département6' },
    { id: 7, nom: 'département6' },
    { id: 8, nom: 'département6' },
    { id: 9, nom: 'département6' },

    // Ajoutez vos données ici
  ];

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fonction pour afficher les éléments de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-wrapper">
      <Table striped bordered hover border={3} className='table-container'>
        <thead className='th'>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>
                <Button variant="warning" className='ms-1'>Show</Button>{' '}
                <Button variant="success" className='ms-1'>Modifier</Button>{' '}
                <Button variant="danger" className='ms-1'>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    
      <div className="d-flex justify-content-center">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handleClick(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default CrudPage; */

/*import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import './crud.css';

function CrudPage() {
  // Définir l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Nombre d'éléments par page

  // Données de votre tableau
  const data = [
    { id: 1, nom: 'département1' },
    { id: 2, nom: 'département2' },
    { id: 3, nom: 'département3' },
    { id: 4, nom: 'département4' },
    { id: 5, nom: 'département5' },
    { id: 6, nom: 'département6' },
    { id: 7, nom: 'département6' },
    { id: 8, nom: 'département6' },
    { id: 9, nom: 'département6' },

    // Ajoutez vos données ici
  ];

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fonction pour afficher les éléments de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-wrapper">
      <Table striped bordered hover border={3} className='table-container'>
        <thead className='th'>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>
                <Button variant="warning" className='ms-1'>Show</Button>{' '}
                <Button variant="success" className='ms-1'>Modifier</Button>{' '}
                <Button variant="danger" className='ms-1'>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      <div className="pagination">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handleClick(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default CrudPage; */

/*import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import './crud.css';

function CrudPage() {
  // Définir l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Nombre d'éléments par page

  // Données de votre tableau
  const data = [
    { id: 1, nom: 'département1' },
    { id: 2, nom: 'département2' },
    { id: 3, nom: 'département3' },
    { id: 4, nom: 'département4' },
    { id: 5, nom: 'département5' },
    { id: 6, nom: 'département6' },
    { id: 7, nom: 'département6' },
    { id: 8, nom: 'département6' },
    { id: 9, nom: 'département6' },
    // Ajoutez vos données ici
  ];

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Fonction pour afficher les éléments de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  // Fonction pour aller à la page précédente
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour aller à la page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover border={3} className='table-container'>
        <thead className='th'>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>
              <Button variant="warning" className='ms-1 sh' >Show</Button>
                <Button variant="success" className='ms-3 mo'>Modifier</Button>
                <Button variant="danger" className='ms-3 su'>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

   
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

export default CrudPage; */

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import AddDepartmentForm from './AddDepartmentForm'; // Importez le composant du formulaire
import ShowPopupDetails from './ShowPopupDetails';
import EditPopupDetails from './EditPopupDetails'; // Importez le composant de modification
import DeleteConfirmationPopup from './DeleteConfirmationPopup'; // Importer le composant de confirmation de suppression
import { useState } from 'react';
import './crud.css';

function CrudPage() {
  // Définir l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1); // Initialiser l'état pour la page actuelle
  const [itemsPerPage] = useState(3); // Nombre d'éléments par page

  // Données de votre tableau
  const [data, setData] = useState([
    { id: 1, nom: 'département1' },
    { id: 2, nom: 'département2' },
    { id: 3, nom: 'département3' },
    { id: 4, nom: 'département4' },
    { id: 5, nom: 'département5' },
    { id: 6, nom: 'département6' },
    { id: 7, nom: 'département7' },
    { id: 8, nom: 'département8' },
    { id: 9, nom: 'département9' },
    // Ajoutez vos données ici
  ]);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Fonction pour afficher les éléments de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  // Fonction pour changer de page
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);
  // Fonction pour aller à la page précédente
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // Fonction pour aller à la page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

//Ajouter
  const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire
  const handleShowForm = () => setShowForm(true); // Fonction pour afficher le formulaire
  const handleCloseForm = () => setShowForm(false); // Fonction pour fermer le formulaire

  //Show  // État pour contrôler l'affichage du popup de détails
  const [showPopup, setShowPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState({ id: '', nom: '' });
 // Fonction pour ouvrir le popup de détails
  const handleShowPopup = (id, nom) => {
    setPopupInfo({ id, nom });
    setShowPopup(true);
  };
    // Fonction pour fermer le popup de détails
  const handleClosePopup = () => setShowPopup(false);
  const [showEditPopup, setShowEditPopup] = useState(false); // État pour contrôler l'affichage du popup de modification
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);
  const [editPopupInfo, setEditPopupInfo] = useState({ id: '', nom: '' }); // État pour stocker les informations à modifier
  const handleShowEditPopup = (id, nom) => {
    setEditPopupInfo({ id, nom }); // Mettre à jour les informations du popup de modification
    setShowEditPopup(true); // Afficher le popup de modification
  };
  const handleCloseEditPopup = () => setShowEditPopup(false); // Fonction pour fermer le popup de modification
  // Fonction pour sauvegarder les modifications
  const handleSaveChanges = (id, nom) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { id, nom };
      }
      return item;
    });
    setData(newData);
    handleCloseEditPopup();
  };
   // Fonction pour gérer la suppression d'un département
   const handleDelete = (id) => {
    const department = data.find(item => item.id === id);
    setDepartmentToDelete(department);
    setShowDeleteConfirmation(true);
  };

    // Fonction pour confirmer la suppression d'un département
  const handleConfirmDelete = () => {
    const newData = data.filter(item => item.id !== departmentToDelete.id);
    setData(newData);
    setShowDeleteConfirmation(false);
  };



  return (
    <div className="table-wrapper">
      <div >
        <Button className="test" variant="primary" onClick={handleShowForm}>Ajouter</Button> 
      </div>
      <AddDepartmentForm show={showForm} handleClose={handleCloseForm} /> 

      <Table striped bordered hover border={3} className='table-container'>
        <thead className='th'>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>
                <Button variant="warning"  className='ms-1 sh' onClick={() => handleShowPopup(item.id, item.nom)}>Show</Button>{' '}
                <Button variant="success"  className='ms-1 mo' onClick={() => handleShowEditPopup(item.id, item.nom)}>Modifier</Button>{' '}
                <Button variant="danger"   className='ms-1 su' onClick={() => handleDelete(item.id)}>Supprimer</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    
      <ShowPopupDetails show={showPopup} handleClose={handleClosePopup} id={popupInfo.id} nom={popupInfo.nom} />
      <EditPopupDetails show={showEditPopup} handleClose={handleCloseEditPopup} id={editPopupInfo.id} nom={editPopupInfo.nom} handleSave={handleSaveChanges} />
      <DeleteConfirmationPopup 
        show={showDeleteConfirmation} 
        handleClose={() => setShowDeleteConfirmation(false)} 
        handleConfirm={handleConfirmDelete}
        department={departmentToDelete}
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





