import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from '../pages/Calculator';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';
import Header from './Header';

const App = () => (
  <div className="main-container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </div>
);

export default App;
