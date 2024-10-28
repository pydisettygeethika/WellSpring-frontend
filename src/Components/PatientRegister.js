import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
import "../Styles/PatientRegister.css"; 

function PatientRegister() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
    medicalHistory: '',
    email: '',
    password: '',
    height: '',
    weight: '',
    dateOfRegistration: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/patients/register', formData)
      .then((response) => {
        console.log(response.data);
        alert('Patient registered successfully!');
        navigate('/login/patient');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='reg'>
       <div className='box1'>
         <form onSubmit={handleSubmit}>
           <h2>Patient Registration</h2>
           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
           <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
           <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
           <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
           <textarea name="medicalHistory" placeholder="Medical History" value={formData.medicalHistory} onChange={handleChange}></textarea>
           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
           <input type="number" name="height" placeholder="Height (in feet)" value={formData.height} onChange={handleChange} required />
           <input type="number" name="weight" placeholder="Weight (in kg)" value={formData.weight} onChange={handleChange} required />
           <input type="date" name="dateOfRegistration" placeholder="Date of Registration" value={formData.dateOfRegistration} onChange={handleChange} required />
           <button type="submit">Register</button>
         </form>
       </div>
    </div>
  );
}

export default PatientRegister;
