import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            PERSIST VENTURES
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="navbar-links">
              <Link to="/Ongoing-Startupathon" className="nav-link">
                Ongoing Startupathon
              </Link>
              <Link to="/Completed-Startupathon" className="nav-link">
                Completed Startupathon
              </Link>
              <Link to="/Startupathon-Guide" className="nav-link">
                Startupathon Guide
              </Link>
              <Link to="/How-To-Win" className="nav-link">
                How To Win
              </Link>
              <Link to="/HMentor-Network" className="nav-link">
                Mentor Network
              </Link>
            </div>
            <Link to="/apply" className="fellowship-button">
              Apply for Fellowship
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;