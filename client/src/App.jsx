import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Navbar/Navbar';
import Products from './components/Products/Products';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import { ProductProvider } from './components/UseContext/ProductContext';
import { CartProvider } from './components/UseContext/CartContext';


function App() {
  return (
    <div className='App'>
      <ProductProvider>
        <CartProvider>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/> }/>
              <Route path="/products/:category" element={<Products/>}/>
              <Route path="/aboutUs" element={<AboutUs/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </CartProvider>
      </ProductProvider>
    </div>
    )
}

export default App


