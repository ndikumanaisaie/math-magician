import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="nav-bar">
    <h2>Math Magician</h2>
    <div className="nav">
      <Link to="/">Home</Link>
      <span className="vertical-bar" />
      <Link to="calculator">Calculator</Link>
      <span className="vertical-bar" />
      <Link to="quotes">Quotes</Link>
    </div>
  </div>
);

export default Header;
