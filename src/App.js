import React, { useState } from 'react';
import DateDropdown from './DateDropdown';
import GenderDropdown from './GenderDropdown';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import GenerateButton from './GenerateButton';
import './App.css';

function App() {
const TEXT_URL_1 = "https://your-link-to-the-first-text-file.txt";
const TEXT_URL_2 = "https://your-link-to-the-second-text-file.txt";

const [style1Text, setStyle1Text] = useState("");
const [style2Text, setStyle2Text] = useState("");

const fetchTextFromUrl = async (url) => {
  const response = await fetch(url);
  const text = await response.text();
  return text;
};

const handleStyle1ButtonClick = async () => {
  const text = await fetchTextFromUrl(TEXT_URL_1);
  setStyle1Text(text);
};

const handleStyle2ButtonClick = async () => {
  const text = await fetchTextFromUrl(TEXT_URL_2);
  setStyle2Text(text);
};
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
      <button onClick={handleStyle1ButtonClick}>Style1</button>
<button onClick={handleStyle2ButtonClick}>Style2</button>
      <GenerateButton onClick={generateSpintax} />
      
      <div className="spintax-output">{spintax}+style1Text+style2Text</div>
    </div>
  );
}

export default App;
