import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ColorContext } from './ColorContex';

function Contact(props) {
    const { buttonColor } = useContext(ColorContext);
    return (
        <>
            <Container fluid className='p-0'>
                <div id='contact-bg'>
                    <h2 className={`text-${buttonColor} fw-bold fs-1`} data-aos="fade-down">Contact Us</h2>
                </div>
            </Container>
            <Container fluid className='p-0 my-5'>
                <Row className='justify-content-center text-center'>
                    <Col sm={12} md={10} data-aos="fade-up">
                        <h5 className={`text-${buttonColor} fw-bold fs-3`}>Contact Us</h5>
                        <h1 >Contact For Any Query</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='my-5'>
                <Row className='justify-content-center text-center px-5'>
                    <Col sm={12} md={4}>
                        <h5 className={`text-${buttonColor} fw-bold fs-4`}>Email </h5>
                        <p className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>SnackHub@gmail.com</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className={`text-${buttonColor} fw-bold fs-4`}>Contact</h5>
                        <p className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>+123 4567 89</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className={`text-${buttonColor} fw-bold fs-4`}>Address</h5>
                        <p className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>607, Link, 100 Feet Rd, opposite Shree Vishnudhara Gardens, Gota, Ahmedabad, Gujarat 382481</p>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>
                <Row className='justify-content-center'>
                    <Col sm={12} md={6} className='mb-3' data-aos="fade-up">
                        <iframe
                            title="Google Map"
                            style={{ border: '0' }}
                            width="100%"
                            height="325px"
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14678.956595705538!2d72.5418407!3d23.1066429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830e7122ba49%3A0xbbf1b44921b0e6d2!2sSutra%20Analytics%20Private%20Limited!5e0!3m2!1sen!2sin!4v1721627033547!5m2!1sen!2si`}
                            allowFullScreen
                    
                        />
                    </Col>
                    <Col sm={12} md={6} data-aos="fade-up">
                        <Col sm={12} md={12} >

                            <Form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="cc958746-b438-4758-af79-c1b93a1a1915" />
                                <Col sm={12} md={12}>
                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 text-dark">
                                        <Form.Control type="text" placeholder="name" name='UserName'
                                            className="shadow-none outline-none"
                                            required />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={12} md={12}>
                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 text-dark">
                                        <Form.Control type="email" placeholder="name@example.com" name='UserEmail'
                                            required />
                                    </FloatingLabel>
                                </Col>
                                <Col sm={12} md={12}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Message"
                                        className='mb-3 text-dark'>
                                        <Form.Control
                                            name='Message'
                                            as="textarea"
                                            placeholder="Message"
                                            style={{ height: '100px' }}
                                            required
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Button variant={buttonColor} type="submit" className="form-submit w-100 py-3">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container >

        </>
    )
}

export default Contact





