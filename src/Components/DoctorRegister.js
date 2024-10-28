import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
import "../Styles/DoctorRegister.css";

function DoctorRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    contactNumber: '',
    experienceYears: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    axiosInstance.post('/doctors/register', formData)
      .then((response) => {
        console.log(response.data);
        alert('Doctor registered successfully!');
        navigate('/login/doctor');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        const message = error.response?.data || 'Registration failed. Please try again.';
        setError(message);
      });
  };

  return (
    <div className="reg1">
      <div className="box2">
        <h2>Doctor Registration</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="experienceYears"
            placeholder="Years of Experience"
            value={formData.experienceYears}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        </div>
    </div>
  );
}

export default DoctorRegister;
