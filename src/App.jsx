import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import { AuthContext } from "./context/AuthContext";
import Sidebar from './components/sidebar/Sidebar';

import './app.css'


function App() {
    const { currentUser } = useContext(AuthContext);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/SignIn" />;
    };

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="*" element={<RequireAuth><Sidebar/></RequireAuth>} />
                
            </Routes>
        </BrowserRouter>
    );

}

export default App;
