import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import FooterPage from '../components/footer/FooterPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import CompetenceCrud from '../components/Crud/get_crud/CompetenceCrud.jsx';
import DepartementCrud from '../components/Crud/get_crud/DepartementCrud.jsx';
import FormationCrud from '../components/Crud/get_crud/FormationCrud.jsx';
import CertificateCrud from '../components/Crud/get_crud/CerificateValidationCrud.jsx';
import NotationCrud from '../components/Crud/get_crud/NotationCrud.jsx';
import Dashboard from '../components/dashboard/index.jsx';
import TeamCrud from '../components/Crud/get_crud/TeamCrud.jsx';
import UsersCrud from '../components/Crud/get_crud/userCrud.jsx';
import SignUp from '../components/Crud/add_crud/AddUser.jsx';
import ProtectedRoute from './ProtectedRoute';

const HomePage = () => {

    return (
        <>
            <div className='home'>
                <Routes>
                    <Route path="/" element={<ProtectedRoute elementKey="dashboard" />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="dashboard" />}>
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="competence" />}>
                        <Route path="competence" element={<CompetenceCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="departement" />}>
                        <Route path="departement" element={<DepartementCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="formation" />}>
                        <Route path="formation" element={<FormationCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="team" />}>
                        <Route path="team" element={<TeamCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="users" />}>
                        <Route path="users" element={<UsersCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="certificate" />}>
                        <Route path="certificate" element={<CertificateCrud />} />
                    </Route>

                    <Route path="/" element={<ProtectedRoute elementKey="notation" />}>
                        <Route path="notation" element={<NotationCrud />} />
                    </Route>
                    
                    <Route path="/" element={<ProtectedRoute elementKey="adduser" />}>
                        <Route path="addUser" element={<SignUp />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <div style={{ height: '250px' }}></div>
                <FooterPage />
            </div>
        </>
    );
};

export default HomePage;
