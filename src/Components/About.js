import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to WellSpring, your trusted partner in accessible, personalized healthcare. 
        Our dedicated doctors provide online consultations and specialized care, putting your 
        health first. Let us guide you on your journey to a healthier, happier life.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Find a Specialist"
          description="Easily discover the right specialist for your needs at Health Plus. Our expert doctors prioritize your health, delivering customized care just for you."
        />

        <SolutionStep
          title="Schedule an Appointment"
          description="Pick the date and time that works best for you, and let our team of dedicated medical professionals provide the personalized care you deserve."
        />

        <SolutionStep
          title="Receive Expert Solutions"
          description="Our experienced doctors and specialists are ready to offer expert advice and personalized treatment plans, guiding you toward optimal health outcomes."
        />
      </div>
    </div>
  );
}

export default About;
