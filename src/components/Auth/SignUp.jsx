import React, { useState, useContext } from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { server_uri } from "../../config/config";
import './signUp.css'

function SignUp() {
    const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "", role: "ADMIN", repeatPassword: "" });
    const [error, setError] = useState(null);

    const { currentUser } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {
            if (user.password !== user.repeatPassword) {
                throw new Error("Passwords do not match");
            }
            await axios.post(`${server_uri}/users/register`, { firstname: user.firstname, lastname: user.lastname, email: user.email, password: user.password, role: "ADMIN" }
                , {
                    headers: {
                        'Authorization': `Bearer ${currentUser}`,
                        'Content-Type': 'application/json'
                    },
                }
            );
            setMessage('user added successfully')
            setTimeout(() => {
                setMessage(null)
            }, 4000);
        } catch (err) {
            setIsLoading(false)
            setError(err.response?.data?.message || err.message);
            setTimeout(() => {
                setError(null)

            }, 4000);
        }
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>

            {isLoading ?
                <div className="details-loader">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                :
                <Card className='m-auto mt-3 p-2 signup col-lg-8 ' as={Row}>
                    <Form column sm={12} md={8} ld={6} onSubmit={handleFormSubmit}>
                        <h2 className="text-center">Create an Account</h2>

                        {error && (
                            <Form.Group as={Row} className='mb-2 bg-warning'>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <div className="text-danger">{error}</div>
                                </Col>
                            </Form.Group>
                        )}

                        {message && (
                            <Form.Group as={Row} className='mb-2 bg-success'>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <div className="text-danger">{error}</div>
                                </Col>
                            </Form.Group>
                        )}

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2} cla>First Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    placeholder='First Name'
                                    value={user.firstname}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2}>Last Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    placeholder='Last Name'
                                    value={user.lastname}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={user.email}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2}>Role</Form.Label>
                            <Col sm={10}>
                                <Form.Select
                                    name="role"
                                    value={user.role}
                                    onChange={handleInputChange}
                                >
                                    <option value="ADMIN">Admin</option>
                                    <option value="DEPARTMENT_CHEF">Department Chef</option>
                                    <option value="TEAM_LEADER">Team Leader</option>
                                    <option value="EMPLOYEE">Employee</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2}>Password</Form.Label>
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

                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column sm={2}>Repeat Password</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="password"
                                    name="repeatPassword"
                                    placeholder="Repeat Password"
                                    value={user.repeatPassword}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 mt-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button variant="primary" type="submit" className="buttn">Sign up</Button>
                            </Col>
                        </Form.Group>


                    </Form>
                </Card>
            }

        </>
    );
}

export default SignUp;
