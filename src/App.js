import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './Componates/About'
import Home from './Componates/Home'
import Contact from './Componates/Contact';
import Navigation from './Componates/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componates/Footer';
import './Componates/Style.css'
import './Componates/food.css'
import Menu from './Componates/Menu';
import Settings from './Componates/Settings';
import Login from './Componates/Login';
import Signup from './Componates/Signup';
import CartPage from './Componates/CartPage';
import Checkout from './Componates/Checkout';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(99,105,123)'
      document.body.style.color = "white"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = "black"
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>

      <Navigation mode={mode} toggleMode={toggleMode} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' mode={mode} element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} mode={mode} ></Route>
        <Route path='/Home' element={<Home />} mode={mode}></Route>
        <Route path='/Menu' element={<Menu />} mode={mode}></Route>
        <Route path='/About' element={<About />} mode={mode}></Route>
        <Route path='/Contact' element={<Contact />} mode={mode}></Route>
        <Route path='/Settings' element={<Settings />} mode={mode}></Route>
        <Route path='/CartPage' element={<CartPage />} mode={mode}></Route>
        <Route path='/Checkout' element={<Checkout />} mode={mode}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App