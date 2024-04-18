import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import './assets/css/style.css';

function App() {
  return (
    <Router>

        <Header/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="ProductList/:category" element={<ProductList/>}/>
            <Route path="/ProductDetails" element={<ProductDetails/>}/>
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>

      </Router>
  );
}

export default App;
