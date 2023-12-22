import React from 'react';
import './character-cards.css';

function CharacterCard({ name, nickname, imageUrl, description }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickname && <h4>{nickname}</h4>}
      </div>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default CharacterCard;
