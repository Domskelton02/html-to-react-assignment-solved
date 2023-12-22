import React from 'react';
import './character-cards.css';

class CharacterCardClass extends React.Component {
    render() {
        const { name, nickname, imageUrl, description } = this.props;

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
}

export default CharacterCardClass;