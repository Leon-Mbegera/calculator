import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navbar">
    <div className="title">
      <h1>Math Magicians</h1>
    </div>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/App">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </div>
);
