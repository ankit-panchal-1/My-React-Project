import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ColorContext } from './ColorContex';

function Login({ setIsLoggedIn }) {
    const { buttonColor } = useContext(ColorContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (username === userData.username && password === userData.password) {
                alert('Login SuccessFully');
                setIsLoggedIn(true); // update the isLoggedIn state
                navigate('/Home', { replace: true });
            } else {
                setError('Invalid username or password');
            }
        };
    };
    return (
        <>
            <Container fluid className='py-5'>
                <Row className="justify-content-md-center py-5 my-5" >
                    <Col sm={10} md={6} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }} className='p-4' data-aos='fade-up'>
                    <h2 className={`text-center text-${buttonColor}`}>Login </h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username" className='mb-3'>
                                <Form.Label className='fw-bold'>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className='p-2'
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className='mb-3'>
                                <Form.Label className='fw-bold'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className='p-2'
                                />
                            </Form.Group>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <Button variant={buttonColor} type="submit" className='px-5 p-2 mb-3 w-100 fw-bold fs-4'>
                                Login
                            </Button>

                        </Form>
                        <p className='fw-bold text-end'>
                            Don't have an account? <Link to="/Signup" className='fw-bold fs-4 text-danger'>Sign up</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login