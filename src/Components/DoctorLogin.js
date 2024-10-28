import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { useDoctor } from './DoctorContext';

function DoctorLogin() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { setDoctor } = useDoctor(); 

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('email', credentials.email);
        params.append('password', credentials.password);

        axiosInstance.post('/doctors/login', params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((response) => {
            alert('Doctor login successful!');
            const doctorData = { name: response.data.name, id: response.data.id }; 
            setDoctor(doctorData); 
            navigate('/dashboard/doctor');
        })
        .catch((error) => {
            console.error('There was an error!', error);
            alert('Login failed. Please check your credentials and try again.');
        });
    };

    return (
        <div className='login'>
            <div className='box'>
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1>Doctor Login</h1>
                    <div className='input-box'>
                        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
                        <FaUserDoctor className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember me</label>
                        <Link to="/register/doctor">Forgot Password</Link>
                    </div>
                    <button type="submit">Login</button>
                    <div className='register-link'>
                        <p> Don't have an account? <Link to="/register/doctor">Register</Link></p>
                    </div>
                </form>
            </div>
        </div> 
    );
}

export default DoctorLogin;
