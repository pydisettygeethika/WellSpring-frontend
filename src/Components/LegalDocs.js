import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
        WellSpring☘︎<span className="navbar-sign"></span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to WellSpring, your trusted platform for accessible and personalized healthcare. 
        Our mission is to connect you with expert medical professionals, offering convenient 
        consultations and treatments. By using our platform, you agree to the terms outlined in 
        our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Your privacy is our priority at WellSpring. Our Privacy Policy explains how we collect, 
        use, and protect your personal and medical information. We are committed to secure data handling, 
        ensuring that your information is treated with complete confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By using WellSpring, you agree to abide by our Terms of Service. 
        These guidelines ensure smooth interactions between users and doctors, 
        detailing the responsibilities of both parties while using the platform. 
        Understanding these terms helps ensure a seamless healthcare experience.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        WellSpring connects you with expert doctors for online consultations. 
        These consultations provide convenient access to medical advice, prescriptions, 
        and guidance, but are not intended to replace in-person visits.
        Please provide accurate and complete information for the best possible care.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        WellSpring is designed to make healthcare simple and accessible. 
        You can easily select a specialist, schedule an appointment, and attend virtual 
        consultations. Our doctors offer personalized advice and treatment plans tailored to your unique needs. 
        Please note that emergencies should always be handled by local medical facilities.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2000-2024 WellSpring☘︎. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
