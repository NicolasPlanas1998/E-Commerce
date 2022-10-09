import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import { ProductProvider } from './components/UseContext/ProductContext';


function App() {
  return (
    <div className='App'>
      <ProductProvider>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path="/products/:category" element={<Products/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </ProductProvider>
    </div>
    )
}

export default App


