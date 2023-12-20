import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/house.json';

const CardSection = () => {
  return (
    <section id="cards"> 
      {data.map((card, index) => (
        <Link key={index} to={`/rent/${card.id}`}>
          <div>
            <h3>{card.title}</h3>
           
            <img src={card.cover} alt={card.title} />
           
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CardSection;