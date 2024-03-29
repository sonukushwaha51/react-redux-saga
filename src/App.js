import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import React from 'react';
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail';
import Payment from './components/Payment';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/contactus' element={<Contact />} />
        <Route path="/mycart" element = {<Cart />} />
        <Route path="*" element={<Home/>} />
        <Route path="/product-detail/:skuId" element={<ProductDetail />} /> 
        <Route path="/checkout" element={<Payment />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
