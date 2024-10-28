import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ doctor }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate('/login/doctor'); 
  };

  return (
    <nav>
      <div className="navbar">
        <h2>{doctor ? `Welcome, ${doctor.name}` : "Doctor"}</h2>
        <ul>
          <li>
            <button onClick={handleLogout} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
