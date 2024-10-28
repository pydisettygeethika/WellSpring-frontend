import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          WellSpring☘︎<span className="navbar-sign"></span>
        </Link>
      </h1>


      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
      </ul>
      <div className="button">
      <Link to="/login/patient">
      <button className="navbar-btn" type="button">patientLogin</button>
      </Link>
      <Link to="/login/doctor">
      <button className="navbar-btn" type="button"> DoctorLogin </button>
      </Link>
      </div>
    </div>
  );
}

export default Navbar;
