import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import FooterPage from '../components/footer/FooterPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import CompetenceCrud from '../components/Crud/get_crud/CompetenceCrud.jsx'
import DepartementCrud from '../components/Crud/get_crud/DepartementCrud.jsx';
import FormationCrud from '../components/Crud/get_crud/FormationCrud.jsx'
import CertificateCrud from '../components/Crud/get_crud/CerificateValidationCrud.jsx'
import NotationCrud from '../components/Crud/get_crud/NotationCrud.jsx'
import Dashboard from '../components/dashboard/index.jsx';

import SignUp from '../components/Auth/SignUp.jsx'

const HomePage = () => {
    return (
        <>
        <div className='home' >
                    <Routes>
                        {/* Ajoutez vos routes ici */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/competence" element={<CompetenceCrud />} />
                        <Route path="/departement" element={<DepartementCrud />} />
                        <Route path="/formation" element={<FormationCrud />} />
                        <Route path="/certificate" element={<CertificateCrud />} />
                        <Route path="/notation" element={<NotationCrud />} />
                        <Route path="/addUser" element={<SignUp />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes> 
                    <div style={{ height:'250px'}}></div>
                    <FooterPage /> 
        </div>
         
        </>
    );
}

export default HomePage;