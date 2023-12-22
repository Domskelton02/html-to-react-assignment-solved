import React from 'react';
import './character-ratings.css';

function CharacterRatings() {
    let characters = [
        { name: 'Alfonse Elrich', skillset: 'Being Loveable, Alchemy', votes: 110 },
        // Add the other characters here...
    ];

    // Sort characters by votes in descending order
    characters.sort((a, b) => b.votes - a.votes);

    // Limit to top 5
    characters = characters.slice(0, 5);

    return (
        <section id="character-ratings">
            <h4>Top Characters</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skillset</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map((character, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'light' : 'dark'}>
                            <td>{character.name}</td>
                            <td>{character.skillset}</td>
                            <td>{character.votes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default CharacterRatings;