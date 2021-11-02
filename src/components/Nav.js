import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navbar">
    <div className="title">
      <h1>Math Magicians</h1>
    </div>
    <div className="links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/App" className="nav-link">Calculator</Link>
      <Link to="/Quote" className="nav-link">Quote</Link>
    </div>
  </div>
);

export default Navigation;
