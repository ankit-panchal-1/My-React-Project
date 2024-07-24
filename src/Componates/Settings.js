import React, { useState, useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ColorContext } from './ColorContex';

function Settings(props) {
  const [size, setSize] = useState('medium'); 
  const { buttonColor, handleColorChange } = useContext(ColorContext);

  const handleFontSizeSelection = (newSize) => {
    setSize(newSize);
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
    document.documentElement.classList.add(`font-${newSize}`);
  };

  const colorOptions = [
    { name: 'orange', value: 'orange', backgroundColor: 'orange' },
    { name: 'Sky', value: 'sky', backgroundColor: 'aqua' },
    { name: 'Yellow', value: 'yellow', backgroundColor: 'yellow' },
    { name: 'Success', value: 'success', backgroundColor: 'green' },
    { name: 'Purple', value: 'purple', backgroundColor: 'purple' },
  ];

  const renderColorOptions = () => {
    return (
      <>
        {colorOptions.map((option) => (
          <div key={option.value} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="colorOptions"
              id={option.value}
              value={option.value}
              defaultChecked={option.value === buttonColor} 
              onClick={() => handleColorChange(option.value)}
            />
            <div
              style={{
                height: '30px',
                width: '30px',
                backgroundColor: option.backgroundColor,
                borderRadius: '5px',
              }}
            />
          </div>
        ))}
      </>
    );
  };

  const renderFontSizeOptions = () => {
    const fontSizeOptions = [
      { id: 'small', label: 'Small' },
      { id: 'medium', label: 'Medium' },
      { id: 'large', label: 'Large' },
    ];

    return (
      <>
        {fontSizeOptions.map((option) => (
          <div key={option.id} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="fontSizeOptions"
              id={option.id}
              value={option.id}
              defaultChecked={option.id === size} // Set default checked for medium
              onClick={() => handleFontSizeSelection(option.id)}
            />
            <label className="form-check-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </>
    );
  };

  return (
    <>

<Container fluid className='p-0'>
        <div id='contact-bg'>
          <h2 className={`text-${buttonColor} fw-bold fs-1`} data-aos="fade-down">Settings</h2>
        </div>
      </Container>
      
      <Container fluid className={`py-5 font-${size}`}>
        <Row className="justify-content-center mb-4 pt-5">
          <Col sm={12} md={8} className="p-3" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }} data-aos="fade-up">
            <h5 className={`text-${buttonColor}`}>Preferred Color</h5>
            {renderColorOptions()}
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col sm={12} md={8} className="p-3" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}  data-aos="fade-up">
            <h5 className={`text-${buttonColor}`}>Font Size</h5>
            {renderFontSizeOptions()}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Settings;