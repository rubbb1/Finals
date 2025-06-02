import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      sino: 'who',
      bakit: 'why',
      paano: 'how',
      ano: 'what',
      saan: 'where',
      kailan: 'when',
      oo: 'yes',
      hindi: 'no',
      salamat: 'thank you',
      paalam: 'goodbye',
      mahal: 'love',
      kaibigan: 'friend',
      pamilya: 'family',
      bahay: 'house',
      pagkain: 'food',
      tubig: 'water',
      trabaho: 'work',
      paaralan: 'school',
      libro: 'book',
      gatas: 'milk',
      araw: 'sun',
      buwan: 'moon',
      bituin: 'star',
      dagat: 'sea',
      bundok: 'mountain',
      hangin: 'wind',
      ulan: 'rain',
      apoy: 'fire',
      lupa: 'earth',
      langit: 'sky',
      puso: 'heart',
      isip: 'mind',

      // Add more translations as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;