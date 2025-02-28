import React from 'react';
import salaryIcon from '../assets/images/salary-icon.png';
import fundingIcon from '../assets/images/funding-icon.png';
import equityIcon from '../assets/images/equity-icon.png';
import awsIcon from '../assets/images/aws-icon.png';
import openaiIcon from '../assets/images/openai-icon.png';
import ibmIcon from '../assets/images/ibm-icon.png';
import twilioIcon from '../assets/images/twilio-icon.png';
import airtableIcon from '../assets/images/airtable-icon.png';

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

        <div className="rewards-section">
          <h2 className="rewards-title">
            Startupathon Success Comes with Extraordinary Rewards
          </h2>
          <div className="rewards-grid">
            <div className="reward-card">
              <div className="reward-icon">
                <img src={salaryIcon} alt="Salary" />
              </div>
              <h3>Competitive Salary</h3>
              <p>Begin your journey stress-free.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={fundingIcon} alt="Company Funding" />
              </div>
              <h3>≥ $10,000 USD in Company Funding</h3>
              <p>Kickstart your venture with solid funding.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={equityIcon} alt="Founder Equity" />
              </div>
              <h3>≥ 10% Founder Equity</h3>
              <p>Own your share in what you create.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={awsIcon} alt="AWS Credits" />
              </div>
              <h3>≥ $100,000 USD AWS Credits</h3>
              <p>Harness AWS for robust infrastructure.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={openaiIcon} alt="OpenAI Credits" />
              </div>
              <h3>$1,000 OpenAI Credits</h3>
              <p>Leverage cutting-edge AI to build smart solutions.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={ibmIcon} alt="IBM Cloud Credits" />
              </div>
              <h3>$120,000 USD IBM Cloud Credits</h3>
              <p>Innovate with IBM Cloud.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={twilioIcon} alt="Twilio Credits" />
              </div>
              <h3>$2,500 Twilio Credits</h3>
              <p>Powerful APIs for messaging, voice, and video.</p>
            </div>
            <div className="reward-card">
              <div className="reward-icon">
                <img src={airtableIcon} alt="Airtable Credits" />
              </div>
              <h3>$2,000 Airtable Credits</h3>
              <p>Streamline your startup with Airtable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupathonHero; 