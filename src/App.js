// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import PatientLogin from "./Components/PatientLogin"; 
import DoctorLogin from "./Components/DoctorLogin";
import PatientRegister from './Components/PatientRegister';
import DoctorRegister from './Components/DoctorRegister';
import PatientDashboard from './Components/PatientDashboard';
import DoctorDashboard from './Components/DoctorDashboard';
import AppointmentForm from './Components/AppointmentForm';
import DoctorList from './Components/DoctorList';
import { DoctorProvider } from './Components/DoctorContext'; // Import the DoctorProvider

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <DoctorProvider> {/* Wrap the Router with the DoctorProvider */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login/patient" element={<PatientLogin />} />
            <Route path="/login/doctor" element={<DoctorLogin />} />
            <Route path="/register/patient" element={<PatientRegister />} />
            <Route path="/register/doctor" element={<DoctorRegister />} />
            <Route path="/dashboard/patient" element={<PatientDashboard />} />
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
            <Route path="/appointment-form" element={<AppointmentForm />} />
            <Route path="/doc-list" element={<DoctorList />} /> {/* Use 'element' instead of 'component' */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DoctorProvider>
      </Router>
    </div>
  );
}

export default App;
