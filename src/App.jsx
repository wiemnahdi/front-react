// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarPage from './components/navbar/NavbarPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FooterPage from './components/footer/FooterPage';
// import SignIn from './components/forms/SignIn';
// import Body from './components/body/body';
// import CrudPage from './components/Crud/CrudPage';
// import Popup from './components/Popup';
//
//
//
//
// function App() {
//   const [openPopup, setOpenPopup] = useState(false)
//
//
//   return (
//
//     <BrowserRouter>
//
//       <NavbarPage />
//
//       <Routes>
//
//       <Route path="/SignIn" element={<SignIn />} />
//       <Route path="/Submit" element={<CrudPage />} />
//
// <Popup  openPopup = {openPopup}
//         setOpenPopup= {setOpenPopup}
// >
//
// </Popup>
//
//
//
//     </Routes>
//
//
//       <Body />
//
//
//      <FooterPage/>
//
//
//     </BrowserRouter>
//
//
//
//
//
//
//   );
// }
//
// export default App;
//

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarPage from './components/navbar/NavbarPage';
import FooterPage from './components/footer/FooterPage';
import SignIn from './components/forms/SignIn';
import Body from './components/body/body';
import CrudPage from './components/Crud/CrudPage';

import NavbarAdmin from './navbar admin/NavbarAdmin';




function App() {
    

    return (
        <BrowserRouter>
        
            <Routes>
           
            <Route path="/SignIn"  element={<><NavbarPage /><SignIn /></>} />
            <Route path="/"  element={<><NavbarPage /></>} />

                <Route path="/Crud" element={<CrudPage />} />
                <Route path="/admin" element={<NavbarAdmin />} />
               
              
               
            </Routes>
           
            <Body />
            <FooterPage />
        </BrowserRouter>
    );
}

export default App;






