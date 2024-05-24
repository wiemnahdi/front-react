import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { BiBell, BiEnvelope } from 'react-icons/bi';
import { Container, Nav, Navbar, NavDropdown, Form, } from 'react-bootstrap';
import { RoleContext } from '../../context/RoleContext';
import Image from '../navbar/admin.png'
function NavbarPage() {
  const { dispatch } = useContext(AuthContext);
  const { currentRole } = useContext(RoleContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <>
      <div className="navbar-container navbar-custom t-dark">
        <Navbar sticky="top">
          <Container>
            <Navbar.Brand className="logo" >LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-between">
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=""
                />
              </Form>
              <Navbar.Text>
                <Nav className="me-auto my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link href="#messages"><BiEnvelope /></Nav.Link>
                  <Nav.Link href="#notifications"><BiBell /></Nav.Link>
                  <Nav.Link >{currentRole}</Nav.Link>
                  <Nav.Link ><img width="40px" heigth="40px" style={{ borderRadius: "30px" }} src={Image} alt='image' /></Nav.Link>
                  <NavDropdown title="Actions" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    {/*
                    <NavDropdown.Divider />
                    */}

                  </NavDropdown>
                </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarPage;
