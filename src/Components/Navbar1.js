import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">WellSpring☘︎</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
