import React ,{useContext}from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ColorContext } from './ColorContex'

function Checkout() {
  const { buttonColor } = useContext(ColorContext);

  return (
    <>
    <Container fluid className='my-5'>
        <Row className='justify-content-center my-5'>
            <Col sm={10} md={8} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} className='p-4'>
            <h3 className='my-4 text-center'>Payment Done</h3>
            <Button as={Link} to="/Home" variant={buttonColor} className='px-4 py-3 text-right mb-3'> Go To Home </Button>

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Checkout