import React from 'react';

const StartupathonAbout = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div>
            <h2 className="about-title">
              About Startupathon
            </h2>
            <p className="about-description">
              Startupathon is more than just a competition - it's a launchpad for the next generation of innovative startups. 
              Over an intensive period, teams will develop, refine, and pitch their ideas to a panel of industry-leading judges.
            </p>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Ideation & Development</h3>
                  <p>Transform your innovative idea into a viable product with guidance from industry experts.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Mentorship</h3>
                  <p>Get personalized guidance from successful entrepreneurs and industry veterans.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Pitch & Present</h3>
                  <p>Showcase your startup to investors and compete for substantial funding opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <div className="about-card-content">
                <h3>Join the Competition</h3>
                <p>Limited spots available</p>
                <button className="primary-button">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupathonAbout;