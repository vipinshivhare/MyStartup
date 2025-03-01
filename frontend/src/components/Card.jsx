import React from 'react';
import './AdminPanel.css';
import './Card.css';

const Card = ({ title, description, imageUrl, fundingOffered, deadline }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} className="card-icon" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="funding-offered">
        Initial Funding Offered : <span className="amount">${fundingOffered}</span>
      </p>
      <p className="card-description">{description}</p>
      <div className="deadline-container">
        <img src="path-to-clock-icon" alt="clock" className="clock-icon" />
        <p className="deadline">
          Deadline approaching! Apply by {new Date(deadline).toLocaleDateString()}!
        </p>
      </div>
      <button className="view-details-btn">View Challenge Details</button>
    </div>
  );
};

export default Card;