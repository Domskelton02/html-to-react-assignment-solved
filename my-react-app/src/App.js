import React from 'react';
import Header from './header'; // Import your Header component
import CharacterRatings from './CharacterRatings'; // Import your CharacterRatings component
import CharacterCard from './CharacterCard'; // Import your CharacterCard component
import './App.css'; // Keep your global styles
import characterData from '../fma-data';  // Import your character data

function App() {
  // Use the imported character data directly
  // If you need to transform the data (sort, filter, etc.), you can do it here or in the respective components

  return (
    <div className="App">
      <Header />
      <CharacterRatings characters={characterData} /> {/* Pass imported character data as props */}
      <section id="character-cards">
        {characterData.map((character) => (
          <CharacterCard
            key={character.name} // Ensure 'name' is unique or use a different unique identifier
            name={character.name}
            nickname={character.nickname}
            imageUrl={character.imageUrl}
            description={character.description}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
