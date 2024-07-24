import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ColorContext } from './ColorContex';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function Footer() {
  const phoneNumber = '+1234567890';
  const emailAddress = 'snackHub@gamil.com';
  const { buttonColor } = useContext(ColorContext);

  return (
    <>
      <Container fluid className=" bg-dark text-light pt-5 py-3 mt-5">
        <Container className=" py-5">
          <Row className="g-5">
            <Col sm={6} md={3} data-aos="fade-up">
              <h5 className={`text-start text-${buttonColor} fw-2 fs-3 mb-4`}>Company</h5>
              <Link className="d-block mb-2 text-decoration-none text-light page-link" to="/Home"><i className="fa-solid fa-greater-than me-3 fa-xs"></i>Home</Link>
              <Link className="d-block mb-2 text-decoration-none text-light page-link" to="/Menu"><i className="fa-solid fa-greater-than me-3 fa-xs"></i>Menu</Link>
              <Link className="d-block mb-2 text-decoration-none text-light page-link" to="/About"><i className="fa-solid fa-greater-than me-3 fa-xs"></i>About Us</Link>
              <Link className="d-block mb-2 text-decoration-none text-light page-link" to="/Contact"><i className="fa-solid fa-greater-than me-3 fa-xs"></i>Contact Us</Link>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up">
              <h5 className={`text-start text-${buttonColor} fw-2 fs-3 mb-4`}>Contact</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                <a href='https://maps.app.goo.gl/y7Np45pSV6roARTP6' target="_blank" className='text-decoration-none text-light'>123 Street, New York, USA</a>
              </p>
              <p className="mb-2"><i className="fa fa-phone me-3"></i><a className='text-decoration-none text-light' href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i><a className='text-decoration-none text-light' href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
              <Col className="d-flex pt-2">
                <a className="btn btn-outline-light rounded-circle me-2 icon-hover" href="https://twitter.com" target='_blank'><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light rounded-circle me-2 icon-hover" href="https://www.facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light rounded-circle me-2 icon-hover" href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a className="btn btn-outline-light rounded-circle me-2 icon-hover" href="" target='_blank'><i className="fab fa-linkedin-in"></i></a>
              </Col>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up">
              <h5 className={`text-start text-${buttonColor} fw-2 fs-3 mb-4`}>Opening</h5>
              <h6 className="text-light fw-normal">Monday - Saturday</h6>
              <p>09AM - 09PM</p>
              <h6 className="text-light fw-normal">Sunday</h6>
              <p>10AM - 08PM</p>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up">
              <h5 className={`text-start text-${buttonColor} fw-2 fs-3 mb-4`}>Newsletter</h5>
              <p>SnackHub is a Place where you can please your soul and tummy with delicious food recipies of all culsine.</p>
              <div className="position-relative mx-auto" >
                <Form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="cc958746-b438-4758-af79-c1b93a1a1915" />
                  <input className="form-control border-orange w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" name='user email' required />
                  <Button variant={buttonColor} type="submit" className="form-submit py-2 position-absolute top-0 end-0 mt-2 me-2">Sign up</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row >
            <Col md={12} className=" text-center  mb-3 mb-md-0">
              © 2023-2024 <a className={`text-decoration-none border-bottom text-${buttonColor}`} href="https://sutraanalytics.com/" target='_blank'>Sutra Anlatics</a> | All Right Reserved.

            </Col>
          </Row>
        </Container>

      </Container>
    </>
  );
}
export default Footer;
