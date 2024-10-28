import React from 'react';
import '../Styles/DoctorList.css'; 

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: require("../Assets/doc1.png"), 
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialty: "Neurology",
    image: require("../Assets/doc2.png"), 
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    specialty: "Pediatrics",
    image: require("../Assets/doc3.png"), 
  },
  {
    id: 4,
    name: "Dr. Kim",
    specialty: "Cardiology",
    image: require("../Assets/doc4.png"), 
  },
  {
    id: 5,
    name: "Dr. Jessica",
    specialty: "Neurology",
    image: require("../Assets/doc5.png"), 
  },
  {
    id: 6,
    name: "Dr. Ram",
    specialty: "Pediatrics",
    image: require("../Assets/doc6.png"),
  },
];

const DoctorList = () => {
  return (
    <div className="doctor-list">
      <h2>Our Doctors</h2>
      <div className="doctor-cards">
        {doctorsData.length > 0 ? (
          doctorsData.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          ))
        ) : (
          <p>No doctors available.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
