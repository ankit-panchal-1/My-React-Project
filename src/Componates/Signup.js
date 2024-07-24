import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ColorContext } from './ColorContex';

function Signup({setIsLoggedIn}) {
  const { buttonColor } = useContext(ColorContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const userData = { username, email, password };
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
      navigate('/Home', { replace: true });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <Container fluid className='py-5'>
      <Row className="justify-content-center py-5 my-5">
        <Col md={6} sm={10} className='p-4'data-aos='fade-up' style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
          <h2 className={`text-center text-${buttonColor}`}>Sign up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className='mb-3'>
              <Form.Label className='fw-bold'>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
                className='p-2'
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className='mb-3'>
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                className='p-2'
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className='mb-3'>
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                className='p-2'
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className='mb-3'>
              <Form.Label className='fw-bold'>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Enter confirm password"
                className='p-2'
                required
              />
            </Form.Group>

            <Button variant={buttonColor} type="submit" className='mb-3 px-5 py-2 w-100 fw-bold fs-4'>
              Sign up
            </Button>
          </Form>
          <p className='fw-bold'>
            Do have an account? <Link to="/" className='fw-bold fs-4 text-danger'>Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};



export default Signup;





