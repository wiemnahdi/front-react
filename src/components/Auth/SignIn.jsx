import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import { RoleContext } from "../../context/RoleContext";
import { useNavigate } from "react-router-dom";
import NavbarPage from "../navbar/NavbarSignIn";
import { server_uri } from "../../config/config";


import "./signin.css";

function SignIn() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    const { dispatch,currentUser } = useContext(AuthContext);
    const {dispatchRole} =useContext(RoleContext)
    const [isLoading, setIsLoading] = useState(false);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(`${server_uri}/auth/authenticate`, { email:user.email,password:user.password });
            
            dispatch({ type: "LOGIN", payload: response.data.access_token });
            dispatchRole({type:response.data.role})
            navigate("/dashboard");
            
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            setError( err.response?.data?.message || err.message);
            
            setTimeout(() => {
                setError(null)
            }, 4000);
            
        }
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        if(currentUser){
           navigate('/')
        }
    },[])

    return (
        <>
            <NavbarPage />
            {isLoading?
            <div className="details-loader">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          :
          <div className="form-container">
          <Form className="form" onSubmit={handleFormSubmit}>
              <h1 className="text">WELCOME</h1>

              {error && (
                  <Form.Group as={Row} className="mb-3 bg-warning">
                      <Col sm={{ span: 10, offset: 2 }}>
                          <div className="text-danger">{error}</div>
                      </Col>
                  </Form.Group>
              )}
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                      Email
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control 
                          type="email" 
                          name="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleInputChange} 
                      />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                      Password
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control 
                          type="password" 
                          name="password"
                          placeholder="Password"
                          value={user.password}
                          onChange={handleInputChange} 
                      />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                  <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check label="Remember me" />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">SUBMIT</Button>
                  </Col>
              </Form.Group>
          </Form>
      </div>
            }
           
        </>
    );
}

export default SignIn;
