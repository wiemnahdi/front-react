import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';




function NavbarPage() {

  return (
    
     <Navbar bg="dark" variant="dark" expand="lg">

      <Container className='barre'>
             <Navbar.Brand className='logo' href="#">LOGO</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>0
                    <Nav.Link href="#profile"></Nav.Link>
    
                </Nav>
         
                 <Nav className="login">
                    <Nav.Link href="SignIn">SignIn</Nav.Link>
         
                 </Nav>

                
              </Navbar.Collapse>
      </Container>
     </Navbar>
 
  );
}

export default NavbarPage;