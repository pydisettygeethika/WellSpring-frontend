import React, { useState, useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); 

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [bloodGroup, setBloodGroup] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 2) {
      errors.patientName = "Patient name must be at least 2 characters"; // Corrected from 8 to 2
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (bloodGroup === "default") {
      errors.bloodGroup = "Please select patient blood group"; 
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (!reason.trim()) {
      errors.reason = "Reason for appointment is required"; 
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    
    const appointmentData = {
      patientName,
      patientPhoneNumber: patientNumber,
      patientGender,
      bloodGroup, 
      appointmentDate: appointmentTime,
      preferredMode,
      reason, 
      status: "Scheduled", 
      doctor: { id: 1 }, 
      patient: { id: 1 }, 
    };

    try {
      const response = await fetch("http://localhost:8096/api/appointments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
       
        setPatientName("");
        setPatientNumber("");
        setPatientGender("default");
        setBloodGroup("default"); 
        setAppointmentTime("");
        setPreferredMode("default");
        setReason(""); 
        setFormErrors({});
        
        toast.success("Appointment Scheduled!", {
          position: toast.POSITION.TOP_CENTER,
          onOpen: () => setIsSubmitted(true),
          onClose: () => setIsSubmitted(false),
        });
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message || 'Something went wrong'}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error scheduling appointment. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("default");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:8096/api/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="app1">
       <div className="form1">
         <h2>Schedule Appointment</h2>
         <form onSubmit={handleSubmit}>
           <label>
             Patient Name:
             <input
               type="text"
               value={patientName}
               onChange={(e) => setPatientName(e.target.value)}
               required
             />
             {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
           </label>
           <label>
             Patient Phone Number:
             <input
               type="text"
               value={patientNumber}
               onChange={(e) => setPatientNumber(e.target.value)}
               required
             />
             {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
           </label>
           <label>
             Select Doctor:
             <select
               value={doctorId}
               onChange={(e) => setDoctorId(e.target.value)}
               required
             >
               <option value="default">Select</option>
               {doctors.map((doctor) => (
                 <option key={doctor.id} value={doctor.id}>
                   {doctor.name}
                 </option>
               ))}
             </select>
             {formErrors.doctorId && <p className="error-message">{formErrors.doctorId}</p>}
           </label>
           <label>
             Patient Gender:
             <select
               value={patientGender}
               onChange={(e) => setPatientGender(e.target.value)}
               required
             >
               <option value="default">Select</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="other">Other</option>
             </select>
             {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
           </label>
           <label>
             Blood Group:
             <select
               value={bloodGroup}
               onChange={(e) => setBloodGroup(e.target.value)}
               required
             >
               <option value="default">Select</option>
               <option value="A+">A+</option>
               <option value="A-">A-</option>
               <option value="B+">B+</option>
               <option value="B-">B-</option>
               <option value="O+">O+</option>
               <option value="O-">O-</option>
               <option value="AB+">AB+</option>
               <option value="AB-">AB-</option>
             </select>
             {formErrors.bloodGroup && <p className="error-message">{formErrors.bloodGroup}</p>}
           </label>
           <label>
             Appointment Time:
             <input
               type="datetime-local"
               value={appointmentTime}
               onChange={(e) => setAppointmentTime(e.target.value)}
               required
             />
             {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
           </label>
           <label>
             Preferred Mode:
             <select
               value={preferredMode}
               onChange={(e) => setPreferredMode(e.target.value)}
               required
             >
               <option value="default">Select</option>
               <option value="video">Video Call</option>
               <option value="voice">Voice Call</option>
               <option value="in-person">In-Person</option>
             </select>
             {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
           </label>
           <label>
             Reason for Appointment:
             <textarea
               value={reason}
               onChange={(e) => setReason(e.target.value)}
               required
             />
             {formErrors.reason && <p className="error-message">{formErrors.reason}</p>}
           </label>
           {isSubmitted && <p className="success-message">Your appointment has been scheduled!</p>} {/* Example usage */}
           <form onSubmit={handleSubmit}></form>
           <button type="submit">Schedule Appointment</button>
         </form>
         <ToastContainer />
       </div>
    </div>
  );
}

export default AppointmentForm;
