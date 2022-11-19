import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path = "/home" component={<Home />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
