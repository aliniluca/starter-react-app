import React, { useState } from 'react';
import DateDropdown from './DateDropdown';
import GenderDropdown from './GenderDropdown';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import GenerateButton from './GenerateButton';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [readingType, setReadingType] = useState(null);
  const [spintax, setSpintax] = useState('');

  const generateSpintax = () => {
    if (!birthdate || !gender || !readingType) {
      alert('Please fill all fields');
      return;
    }

    const spintax = `Write about the ${readingType.value} of a ${gender.value === 'male' ? 'man' : 'woman'} born on ${birthdate.value}. Use the second pronoun addressing the ${gender.value === 'male' ? 'man' : 'woman'}.`;
    setSpintax(spintax);
  };

  return (
    <div className="App">
      <h1>ChatGPT Prompt Generator</h1>
      <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
      <DateDropdown onSelect={setBirthdate} />
      <GenderDropdown onSelect={setGender} />
      <ReadingTypeDropdown onSelect={setReadingType} />
      <GenerateButton onClick={generateSpintax} />
      <div className="spintax-output">{spintax}</div>
    </div>
  );
}

export default App;
