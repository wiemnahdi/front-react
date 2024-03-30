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



function App() {
    

    return (
        <BrowserRouter>
            <NavbarPage />
            <Routes>
           
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/soumettre" element={<CrudPage />} />
               
            </Routes>
           
            <Body />
            <FooterPage />
        </BrowserRouter>
    );
}

export default App;






