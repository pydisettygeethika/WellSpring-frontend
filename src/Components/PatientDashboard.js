import React from 'react';
import "../Styles/PatientDashboard.css";
import Navbar1 from './Navbar1';
import HeroSection1 from './HeroSection1';
import Footer1 from './Footer1';
import Carousel1 from './Carousel1';

function App() {
  return (
    <div className='app3'>
      <div className="App">
        <Navbar1 />
        <Carousel1 />
        <HeroSection1 />
        <Footer1 />
      </div>
    </div>
  );
}

export default App;
