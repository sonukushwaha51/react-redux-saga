import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import React from 'react';
import Cart from './components/Cart'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/contactus' element={<Contact />} />
        <Route path="/mycart" element = {<Cart />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
