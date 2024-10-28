import React from "react";
import InformationCard from "./InformationCard";
import { faTruckMedical, faUserDoctor , faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Consultation"
          description="we bring healthcare to your fingertips with our secure and easy-to-use telemedicine 
          platform. Whether you need routine medical advice, a prescription, or follow-up care, our 
          certified doctors are available to provide comprehensive consultations remotely."
          icon={faUserDoctor}
        />

        <InformationCard
          title="FAQs"
          description="It is essential to provide thorough information about your health records, 
          medical history, current medication, and so forth. If you are referred to Apollo Hospitals 
          by a doctor in your residing country, it is recommended to bring along the contact details 
          of the doctor to your scheduled appointment."
          icon={faQuestionCircle }
        />
      </div>
    </div>
  );
}

export default Info;
