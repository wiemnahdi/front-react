import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AuthContextProvider } from "./context/AuthContext";
import { RoleContextProvider } from './context/RoleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoleContextProvider>
        <App />
      </RoleContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
