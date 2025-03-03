import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, fundingOffered, deadline }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt={title} className="card-icon" />
        </div>
        
        <h2 className="card-title">{title}</h2>
        
        <div className="funding-section">
          <p className="funding-offered">
            Initial Funding Offered: <span className="amount">${fundingOffered}</span>
          </p>
        </div>

        <div className="description-section">
          <p className="card-description">{description}</p>
        </div>

        <div className="deadline-container">
          <span role="img" aria-label="clock" className="clock-icon">⏰</span>
          <p className="deadline">
            Deadline approaching! Apply by {new Date(deadline).toLocaleDateString()}
          </p>
        </div>

        <button className="view-details-btn">
          View Challenge Details
        </button>
      </div>
    </div>
  );
};

export default Card;