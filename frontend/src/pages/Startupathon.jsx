import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import StartupathonHero from '../components/StartupathonHero';
import Card from '../components/Card';

const Startupathon = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <StartupathonHero />
      <div className="card-list flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Startupathon; 