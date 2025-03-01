import React, { useState, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import './AdminPanel.css';

const AdminPanel = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    imageFile: null,
    imagePreview: '',
    fundingOffered: '',
    deadline: '',
    status: 'Visible'
  });
  
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleImageFile(file);
  };

  const handleImageFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCard({
          ...newCard,
          imageFile: file,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleImageFile(file);
  };

  const addCard = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newCard.title);
      formData.append('description', newCard.description);
      formData.append('image', newCard.imageFile);
      formData.append('fundingOffered', newCard.fundingOffered);
      formData.append('deadline', newCard.deadline);
      formData.append('status', newCard.status);

      const response = await axios.post('http://localhost:3000/api/cards', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setCards([...cards, response.data]);
      setNewCard({
        title: '',
        description: '',
        imageFile: null,
        imagePreview: '',
        fundingOffered: '',
        deadline: '',
        status: 'Visible'
      });
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="card-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={newCard.title}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Image Upload:</label>
          <div 
            className="image-upload-container"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            {newCard.imagePreview ? (
              <div className="image-preview">
                <img src={newCard.imagePreview} alt="Preview" />
                <button 
                  className="remove-image"
                  onClick={(e) => {
                    e.stopPropagation();
                    setNewCard({...newCard, imageFile: null, imagePreview: ''});
                  }}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="upload-placeholder">
                <p>Drag and drop an image here or click to select</p>
                <span>Supported formats: JPG, PNG, GIF</span>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>

        <div className="form-group">
          <label>Funding Offered:</label>
          <input
            type="number"
            name="fundingOffered"
            placeholder="Enter funding amount"
            value={newCard.fundingOffered}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={newCard.deadline}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={newCard.description}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={newCard.status}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="Visible">Visible</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        <button onClick={addCard} className="submit-btn">Add Card</button>
      </div>

      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel; 