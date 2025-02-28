import React from 'react';

const StartupathonHero = () => {
  return (
    <div className="hero">
      <div className="hero-gradient"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Startupathon
        </h1>
        <p className="hero-description">
          Your Chance to Build, Lead, and Succeed as a Founder
        </p>
        
        <div className="hero-video-container">
          <iframe
            className="hero-video"
            src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StartupathonHero; 