import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ColorContext } from './ColorContex';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { buttonColor } = useContext(ColorContext);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);
        setCartItems(parsedCartItems);
        calculateTotalPrice(parsedCartItems);
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    }
    setLoading(false);
  }, []);

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleRemoveItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      calculateTotalPrice(newCartItems);
    }
  };

  return (
    <>
      <Container fluid className='p-0'>
        <div id='contact-bg'>
          <h2 className={`text-${buttonColor} fw-bold fs-1`} data-aos="fade-down">Cart Menu</h2>
        </div>
      </Container>
   
    <Container fluid className='justify-content-center py-3'>
      <Row className='justify-content-center'>
        <Col sm={10} md={9} className='p-4' data-aos='fade-up'>
          <h2 className={`text-center text-${buttonColor}`}>Cart Menu</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            cartItems.length === 0 ? (
              <h1 className={`text-center`}>Your cart is empty.</h1>
            ) : (
              <table className="table table-striped text-center bg-light my-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }} data-aos="fade-up">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td><img src={item.image} alt={item.title} width="50" height="50" /></td>
                        <td>Rs.{item.price}/-</td>
                        <td><Button variant='danger' onClick={() => handleRemoveItem(item.id)}><i className="fa-sharp fa-solid fa-trash " ></i></Button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )
          )}
          {cartItems.length === 0 ? (
            <Button as={Link} to="/Menu" variant={buttonColor} className='my-3 mx-5'>Show Menu</Button>
          ) : (
            <div>
              <p className="text-right fw-bold">Total Price:<span className='fw-normal'> Rs.{totalPrice}</span> /-</p>
              <Button as={Link} to="/Menu" variant={buttonColor} className='mb-3 me-3'>Add More</Button>
              <Button as={Link} to="/Checkout" variant='success' className=' mb-3'>Checkout Now</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default CartPage;
