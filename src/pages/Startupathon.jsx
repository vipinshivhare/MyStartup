import React from 'react';
import Navbar from '../components/Navbar';
import StartupathonHero from '../components/StartupathonHero';
import StartupathonAbout from '../components/StartupathonAbout';

const Startupathon = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <StartupathonHero />
      <StartupathonAbout />
    </div>
  );
};

export default Startupathon; 