import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Col, Row, Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ColorContext } from './ColorContex';
import * as images from '../img/img'

const recipes = [
  { id: 1, title: 'Cheese Bhel', image: images.img1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 2, title: 'Chilli Paneer', image: images.img2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100 },
  { id: 3, title: 'Indian Dish', image: images.img3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 80 },
  { id: 4, title: 'Gulab jamun', image: images.img5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 120 },
  { id: 5, title: 'Panner tikka', image: images.img6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 150 },
  { id: 6, title: 'Paneer Pasta', image: images.img7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 130 },
  { id: 7, title: 'Salad', image: images.img8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 100 },
  { id: 8, title: 'Pizza', image: images.img9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 200 },
  { id: 9, title: 'Samosa', image: images.img10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 70 },
  { id: 10, title: 'Sev Puri', image: images.img11, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 60 },
  { id: 11, title: 'Burger', image: images.img12, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 12, title: 'Vanila-IceCream', image: images.img4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 13, title: 'Chocklate-IceCream', image: images.img14, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 14, title: 'Mango-IceCream', image: images.img15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 15, title: 'Mango Juice', image: images.img16, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 16, title: 'Strawberry Juice', image: images.img17, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 17, title: 'Manchurian', image: images.img18, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 18, title: 'Chinese Bhel', image: images.img19, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 19, title: 'Pav-Bhaji', image: images.img20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
  { id: 20, title: 'Noodles', image: images.img21, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: 50 },
];

function Menu() {
  const { buttonColor } = useContext(ColorContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const navigate = useNavigate();
  const handleSearchChange = (searchQuery) => {
    setSearchQuery(searchQuery);
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes);
  };
  const addCart = (recipe) => {
    const storedCartItems = localStorage.getItem('cartItems');
    let newCartItems = [];
    if (storedCartItems) {
      newCartItems = JSON.parse(storedCartItems);
    }
    newCartItems.push(recipe);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    alert('Add to Cart Seccussfully.')
    window.scrollTo(0, 0);
    navigate('/CartPage');
  };
  const handlePanner = () => {
    const idsToFilter = [2, 6, 5];
    setFilteredRecipes(recipes.filter(recipe => idsToFilter.includes(recipe.id)));
  };
  const handlefastFood = () => {
    const idsToFilter = [1, 8, 9, 10, 11];
    setFilteredRecipes(recipes.filter(recipe => idsToFilter.includes(recipe.id)));
  }
  const handleIceCream = () => {
    const idsToFilter = [12, 13, 14];
    setFilteredRecipes(recipes.filter(recipe => idsToFilter.includes(recipe.id)));
  }
  const handleJuice = () => {
    const idsToFilter = [16, 15];
    setFilteredRecipes(recipes.filter(recipe => idsToFilter.includes(recipe.id)));
  }
  const handleChines = () => {
    const idsToFilter = [17, 18, 19, 20];
    setFilteredRecipes(recipes.filter(recipe => idsToFilter.includes(recipe.id)));
  }
  const handleAll = () => {
    setFilteredRecipes(recipes);
  }
  return (
    <>
      <Container fluid className='p-0'>
        <div id='contact-bg'>
          <h2 className={`text-${buttonColor} fw-bold fs-1`} data-aos="fade-down">Food Menu</h2>
        </div>
      </Container>
      
      <Container fluid className='p-0 my-5'>
        <Row className='justify-content-center text-center'>
          <Col sm={12} md={10} data-aos="fade-up">
            <h5 className={`text-${buttonColor} fw-bold fs-3`}>Food Menu</h5>
            <h1 >Most Populer Items</h1>
          </Col>
        </Row>
      </Container>

      <Container fluid className='p-0 my-5'>
        <Row className='justify-content-center my-5'>
          <Col sm={12} md={11}>
            <Row >
              <Col xs={12} sm={4} md={4} className="text-center mb-3">
                <Button variant={buttonColor} className='mx-2' onClick={handleAll}>All Menu</Button>
                <Button variant={buttonColor} className='mx-2' onClick={handlefastFood}>Fast-Food</Button>
                <Button variant={buttonColor} className='mx-2' onClick={handleChines}>Chinese</Button>
              </Col>
              <Col xs={12} sm={4} md={4} className="text-center mb-3">
                <Button variant={buttonColor} className='mx-2' onClick={handleJuice}>Juice</Button>
                <Button variant={buttonColor} className='mx-2' onClick={handleIceCream}>Ice Cream</Button>
                <Button variant={buttonColor} className='mx-2' onClick={handlePanner}>Panner</Button>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4} className="text-center mb-3">
                <Form className="form-inline">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="form-control mx-auto w-100 text-center"
                  />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid  >
        <Row className='justify-content-center my-5'>
          <Col sm={12} md={11}>
            <Row >
              {filteredRecipes.map((recipe) => (
                <Col key={recipe.id} sm={12} md={3} className='mb-4' data-aos="fade-up" >
                  <Card  className={`hover-${buttonColor}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>

                    <Card.Img variant="top" src={recipe.image} id='card-imgs' />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.description}</Card.Text>
                      <Card.Text className='fw-bold'>Rs: {recipe.price}/-</Card.Text>
                      <Button variant={buttonColor} onClick={() => addCart(recipe)} id='card-btn'>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Menu;