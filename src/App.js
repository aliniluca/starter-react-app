import React, { useState } from 'react';
import DateDropdown from './DateDropdown';
import GenderDropdown from './GenderDropdown';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import GenerateButton from './GenerateButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import './App.css';

function App() {
 
 
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [readingType, setReadingType] = useState(null);
  const [spintax, setSpintax] = useState('');
 

const questions = [
  "What can he teach me?",
  "How is our connection?",
  "How do we work together?",
  "How can I listen to him",
  "Where do I reach him?",
  "What is their connection with my spirit animal?",
  "What is their connection with my ancestors?",
  "What is their connection with my daimon self?",
  "What is their connection with my guardian angel?",
  "What is their connection with my aura and inner energy?",
];

const getRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const handleGenerateClick = () => {
  const question = getRandomQuestion();
  const readingTypeText = readingType === "Higher Self" ? "Higher Self" : readingType === "Shadow Self" ? "Shadow Self" : "Spirit Guide";
  const output = `Write about the ${readingTypeText} of a ${gender === "male" ? "man" : "woman"} born on ${format(birthdate, "MMMM d")}. Use the second pronoun addressing the ${gender === "male" ? "man" : "woman"}. ${question}`;
  setOutputText(output);
};


  return (
    <div className="App">
      <h1>ChatGPT Prompt Generator</h1>
      <DateDropdown onSelect={setBirthdate} />
      <GenderDropdown onSelect={setGender} />
      <ReadingTypeDropdown onSelect={setReadingType} />
      <GenerateButton onClick={handleGenerateClick} />
      
      <div className="spintax-output">{output}</div>
    </div>
  );
}

export default App;
