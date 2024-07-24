import React, { useState, useEffect, useContext } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ColorContext } from './ColorContex';
import Image from 'react-bootstrap/Image';
import * as images from '../img/img'
const imagesource = [images.about1, images.about2, images.about3, images.about4];
const imageCols = [
  { className: 'text-start', style: {} },
  { className: 'text-start', style: { marginTop: '25%' } },
  { className: 'text-end', style: {} },
  { className: 'text-end', style: {} },
];

const aboutUsText = [
  "One stop solution for all kind of food related services and requirements.",
  "Feebacks are seriously taken",
  "Top notch event management from 10 to 1000 people company events",
  "Trained delivery professionals who will ensure safe and on time delivery.",
  "Direct involvement of the founder in Operations, Sales Team and technology.",
  "Multiple choice of cuisines from vast pool of restaurants and homemade vendors.",
  "Trained Sales & Marketing, Operations, Accounting team for timely response of your queries.",
  "Expertise in running corporate kitchens and canteens"
];
function About() {
  const { buttonColor } = useContext(ColorContext);
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

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
  const counters = [
    { count: isCounting ? count1 : 15, label: 'Years of Experience' },
    { count: isCounting ? count2 : 50, label: 'Popular Master Chefs' },
  ];
  return (
    < >
      <Container fluid className='p-0'>
        <div id='contact-bg'>
          <h2 className={`text-${buttonColor} fw-bold fs-1`} data-aos="fade-down">About Us</h2>
        </div>
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
          </Col>
        </Row>
      </Container>

      <Container className='my-4'>
        <Row className='justify-content-center'>
          <Col sm={12} md={11} className='py-4' style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <Row className='justify-content-center'>
              <Col sm={12} md={11} data-aos="fade-up" className='text-center mb-5'>
                <h5 className={`text-${buttonColor} fw-bold fs-3`}>About Us</h5>
                <h1>Why You should Choose Us</h1>
              </Col>
              {Array(8).fill(0).map((_, i) => (
                <Col sm={5} md={6} key={i} data-aos={i < 4 ? "fade-up" : "zoom-in"}>
                  <div id='choose-div' className={`px-5 py-3 mb-3 border hover-${buttonColor}`} style={{ height: '150px' }}>
                    <Image src={images[`ab${i + 1}`]} />
                    <p>{aboutUsText[i]}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About