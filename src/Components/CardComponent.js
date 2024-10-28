import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate('/appointment-form'); 
  };

  return (
    <div className="card">
      <img src={require("../Assets/appoint.jpg")} alt="Appointments" />
      <h3>Appointments</h3>
      <p>Get the in person or virtual care you need.</p>
      <button onClick={handleBookAppointmentClick}>Schedule now</button>
    </div>
  );
};

export default CardComponent;
