import React, { useEffect, useState } from 'react';
import NavBar2 from './NavBar2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/DoctorDashboard.css';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const doctorId = 1;

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`http://localhost:8096/api/appointments/doctor/${doctorId}`);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    const loggedInDoctor = { name: 'Dr', id: doctorId };
    setDoctor(loggedInDoctor);
    fetchAppointments();
  }, []);

  const handleAssign = async (id) => {
    try {
      setAppointments(prevAppointments =>
        prevAppointments.map(appointment =>
          appointment.id === id
            ? { ...appointment, assignedTo: doctor.name, status: "Assigned" }
            : appointment
        )
      );

      await axios.put(`http://localhost:8096/api/appointments/assign`, {
        id,
        doctorId: doctor.id,
      });
    } catch (error) {
      console.error("Error assigning appointment:", error);
    }
  };

  const handleLogout = () => {
    navigate('/login/doctor');
  };

  return (
    <div className="doctor-dashboard">
      <NavBar2 doctor={doctor} onLogout={handleLogout} />
      <div className="hero-section">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Appointment Time</th>
              <th>Preferred Mode</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id} className={appointment.assignedTo ? 'assigned' : ''}>
                <td>{appointment.patientName}</td>
                <td>{appointment.patientGender}</td>
                <td>{appointment.bloodGroup}</td>
                <td>{appointment.preferredAppointmentTime}</td>
                <td>{appointment.preferredMode}</td>
                <td style={{ fontWeight: 'bold' }}>{appointment.reason}</td>
                <td>
                  {appointment.assignedTo ? (
                    <span>Assigned to {appointment.assignedTo}</span>
                  ) : (
                    <button onClick={() => handleAssign(appointment.id)}>Assign</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;
