import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import * as images from '../img/img';
import { ColorContext } from './ColorContex'

const services = [
  { icon: 'fa-user-tie', title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
  { icon: 'fa-utensils', title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
  { icon: 'fa-cart-plus', title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
  { icon: 'fa-headset', title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam' },
];
const imagesource = [images.about1, images.about2, images.about3, images.about4];
const imageCols = [
  { className: 'text-start', style: {} },
  { className: 'text-start', style: { marginTop: '25%' } },
  { className: 'text-end', style: {} },
  { className: 'text-end', style: {} },
];


function Home() {
  const { buttonColor } = useContext(ColorContext);
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const counters = [
    { count: isCounting ? count1 : 15, label: 'Years of Experience' },
    { count: isCounting ? count2 : 50, label: 'Popular Master Chefs' },
  ];
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      if (count1 < 15) {
        setCount1(count1 + 1);
      }
      if (count2 < 50) {
        setCount2(count2 + 1);
      }
      if (count1 === 15 && count2 === 50) {
        setIsCounting(false);
        clearInterval(intervalId);
      }
    }, 50); // increment every 50ms
    return () => clearInterval(intervalId);
  }, [count1, count2, isCounting]);
  return (
    <>
      <Container fluid className="py-5 bg-dark hero-header mb-5">
        <Container className="my-5 py-5">
          <Row className="align-items-center g-5">
            <Col lg={6} className="text-center text-lg-start" data-aos="fade-up">
              <h1 className="fw-bold fs-1 text-white">Enjoy Our<br />Helthy Food</h1>
              <p className="text-white mb-4 pb-2 fw-1">SnackHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
              <Button as={Link} to="/Menu" variant={buttonColor} className='px-5 py-3'> EXPLOR NOW </Button>
            </Col>
            <Col lg={6} className="text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={images.homeImg} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='my-5 py-5'>
        <Row className='justify-content-center'>
          {services.map((service, index) => (
            <Col lg={3} sm={6} key={index} data-aos="fade-up">
              <div className={`service-item rounded pt-3 hover-${buttonColor}`}>
                <div className="p-4">
                  <i className={`fa fa-3x ${service.icon} text-${buttonColor} mb-4`}></i>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className='pb-5 my-5'>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <Row className="g-3">
              {imagesource.map((image, index) => (
                <Col lg={6} key={index} className={imageCols[index].className}>
                  <Image className="img-fluid rounded w-100" src={image} data-aos="fade-up" id='card-imgs' style={imageCols[index].style} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6} data-aos="fade-up">
            <h5 className={`text-start text-${buttonColor} fw-normal`}>About Us</h5>
            <h1 className="mb-4">Welcome to <i className={`fa fa-utensils text-${buttonColor} me-2`}></i>SnackHub</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <Row className="g-4 mb-4">
              {counters.map((counter, index) => (
                <Col sm={6} key={index}>
                  <div className={`d-flex align-items-center border-start border-5 border-${buttonColor} px-3`}>
                    <h1 className={`flex-shrink-0 fw-bold text-${buttonColor} mb-0`} data-toggle="counter-up">{counter.count}</h1>
                    <div className="ps-4">
                      <p className="mb-0">{counter.label.split(' ')[0]}</p>
                      <h6 className="text-uppercase mb-0 fw-bold">{counter.label.split(' ').slice(1).join(' ')}</h6>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Button as={Link} to="/About" variant={buttonColor} className='px-5 py-3'> Read More </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col lg={12} className="text-center" data-aos='fade-up'>
            <h5 className={`fw-bold text-${buttonColor} fw-normal`}>Food Menu</h5>
            <h1 className="fw-bold mb-5">Most Popular Items</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="logos">
        <Row className="logo-slide">
          <Col xs={12}>
            <Image src={images.img1} height={100} className="mx-4" />
            <Image src={images.img2} height={100} className="mx-4" />
            <Image src={images.img3} height={100} className="mx-4" />
            <Image src={images.img4} height={100} className="mx-4" />
            <Image src={images.img5} height={100} className="mx-4" />
            <Image src={images.img6} height={100} className="mx-4" />
            <Image src={images.img7} height={100} className="mx-4" />
            <Image src={images.img8} height={100} className="mx-4" />
            <Image src={images.img9} height={100} className="mx-4" />
            <Image src={images.img10} height={100} className="mx-4" />
          </Col>
        </Row>
        <Row className="logo-slide">
          <Col xs={12}>
            <Image src={images.img1} height={100} className="mx-4" />
            <Image src={images.img2} height={100} className="mx-4" />
            <Image src={images.img3} height={100} className="mx-4" />
            <Image src={images.img4} height={100} className="mx-4" />
            <Image src={images.img5} height={100} className="mx-4" />
            <Image src={images.img6} height={100} className="mx-4" />
            <Image src={images.img6} height={100} className="mx-4" />
            <Image src={images.img7} height={100} className="mx-4" />
            <Image src={images.img8} height={100} className="mx-4" />
            <Image src={images.img9} height={100} className="mx-4" />
            <Image src={images.img10} height={100} className="mx-4" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home
// <Container fluid >
//   <Row className=' justify-content-center my-4 '>
//     <Col xs={12} md={4} className='my-4 ms-4 me-3' data-aos="fade-up">
//       <h2 className={`text-${buttonColor}`}>What Are We About</h2>
//       <p>SnackHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>

//     </Col>
//     <Col xs={12} md={5}>
//       <Row>
//         {homes.map((home, i) => (
//           <Col key={home.id} sm={12} md={4} className='mb-4' >
//             <Image src={home.image} thumbnail data-aos="fade-up" />
//           </Col>
//         ))}
//       </Row>
//     </Col>
//   </Row>
// </Container>
// <Container fluid className='my-5'>
//   <Row className=' justify-content-center' >
//     <Col xs={12} md={4} data-aos="fade-up">
//       <Image src={images.img2} id='HBI'></Image>
//     </Col>
//     <Col xs={12} md={5} className='my-4' data-aos="fade-up">
//       <h2 className={`text-${buttonColor}`}>Improve Your Culinary Skills</h2>
//       <h6>Learn New Recepies</h6>
//       <h6 >Experiment with Food</h6>
//       <h6>Write Your Own Recepies</h6>
//       <h6>Know Nutrirtion Facts</h6>
//       <h6>Get Cooking tips</h6>
//       <h6>Get Ranked</h6>
//     </Col>
//   </Row>
// </Container>