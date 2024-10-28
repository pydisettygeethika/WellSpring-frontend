import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardComponent from './CardComponent'; 

function HeroSection() {
    const navigate = useNavigate(); 

    const handleFindDoctorClick = () => {
        navigate('/doc-list');
    };
  
    return (
        <section className="hero-section">
            <h3>We're here when you need us — for every care in the world.</h3>
            <div className="cards">
                <div className="card">
                    <img src={require("../Assets/fdoc.jpg")} alt="Our Doctors" />
                    <h3>Our Doctors</h3>
                    <p>Search by name, specialty, location and more.</p>
                    <button onClick={handleFindDoctorClick}>Find a doctor</button>
                </div>
                <div className="card">
                    <img src={require("../Assets/loc.jpg")} alt="Locations & Directions" />
                    <h3>Locations & Directions</h3>
                    <p>Find any of our 300+ locations.</p>
                    <button>Get directions</button>
                </div>
                <CardComponent />
            </div>
        </section>
    );
}

export default HeroSection;
