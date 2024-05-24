import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { isAuthorize } from '../config/config.js';
import NotAuthorized from '../components/sidebar/NotAuthorized.jsx';
import { RoleContext } from '../context/RoleContext.jsx';
const ProtectedRoute = ({ elementKey}) => {
    const {currentRole} = useContext(RoleContext)
    return isAuthorize(elementKey, currentRole) ? <Outlet /> : <NotAuthorized />;
};

export default ProtectedRoute;
