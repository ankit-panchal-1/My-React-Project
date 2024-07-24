import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import * as images from '../img/img';
import {ColorContext} from './ColorContex'
function Navigation(props) {
  const [expanded, setExpanded] = useState(false);
  const { buttonColor } = useContext(ColorContext);

  const navigate = useNavigate();
  const handleNavClose = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };
  const logout = () => {
    if (window.confirm('Are you sure you want to Logout?')) {
      navigate('/', { replace: true });
    }
  };


  // if (!props.isLoggedIn) {
  //   return (
  //       <Navbar fixed="top" expand="lg" expanded={expanded} className={`navbar navbar-${props.mode} font-${props.size} bg-${props.mode}`} style={{ boxShadow: ' 0 0 10px rgb(123, 122, 122)', fontSize: props.size }}>
  //       <Container>
  //         <Navbar.Brand  className='ms-4'>
  //           <h2 className={`text-${buttonColor}`}>
  //             <Image src={images.logo} style={{ height: '50px', width: '50px' }} />
  //             S<span className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>na</span>ckHub
  //           </h2>
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
  //         <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
  //         </Container>
  //         </Navbar>
          
  //   )
  // }
  return (
    <>
      <Navbar fixed="top" expand="lg" expanded={expanded} className={`navbar navbar-${props.mode} font-${props.size} bg-${props.mode}`} style={{ '--button-color': buttonColor,boxShadow: ' 0 0 10px rgb(123, 122, 122)', fontSize: props.size }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/Home" className='ms-4'>
            <h2 className={`text-${buttonColor}`}>
              <Image src={images.logo} style={{ height: '50px', width: '50px' }}  className='me-2'/>
              S<span className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>na</span>ckHub
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center d-lg-flex d-md-block d-sm-block d-xs-block">
            <Nav className={`mx-5  `}>
            <Nav.Link as={NavLink} onClick={handleNavClose} to="/Home" activeClassName={`active-link `}>Home</Nav.Link>
              <Nav.Link  as={NavLink} onClick={handleNavClose} to="/Menu" activeclassname="active-link">Menu</Nav.Link>
              <Nav.Link  as={NavLink} onClick={handleNavClose} to="/About" activeclassname="active-link">About</Nav.Link>
              <Nav.Link  as={NavLink} onClick={handleNavClose} to="/Contact" activeclassname="active-link">Contact</Nav.Link>
              <Nav.Link  as={NavLink} onClick={handleNavClose} to="/Settings" activeclassname="active-link">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-5 ">
            <Nav.Link as={NavLink} onClick={handleNavClose} to="/CartPage" activeclassname="active-link" className='ms-3  mt-2'>
              <i className="fas fa-cart-shopping fa-2x"></i>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <i className="fa-solid fa-moon fa-2x ms-3 mt-2" onClick={props.toggleMode}></i>
            </Nav.Link>
            <Nav.Link to="/Login" onClick={handleNavClose} activeclassname="active-link" className='ms-3 mt-2' >
              <i className="fa-solid fa-arrow-right-from-bracket fa-2x" onClick={logout}></i>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation