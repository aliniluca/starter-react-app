import React, { useState } from 'react';
import DateDropdown from './DateDropdown';
import GenderDropdown from './GenderDropdown';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import GenerateButton from './GenerateButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import './App.css';

function App() {
 
 
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [readingType, setReadingType] = useState(null);
  const [spintax, setSpintax] = useState('');
 

const questions1 = [
  "What can he teach me?",
  "How is our connection?",
  "How do we work together?",
  "How can I listen to him",
  "Where do I reach him?"
];
 const questions2 = [
  "What is their connection with my spirit animal?",
  "What is their connection with my ancestors?",
  "What is their connection with my daimon self?",
  "What is their connection with my guardian angel?",
  "What is their connection with my aura and inner energy?",
];

 

const handleGenerateClick = () => {
  if (birthdate && gender && readingType) {
    const selectedQuestions = Math.random() < 0.5 ? questions1 : questions2;
    const questionText = selectedQuestions.join(" ");
    const readingTypeText =
      readingType === "Higher Self"
        ? "Higher Self"
        : readingType === "Shadow Self"
        ? "Shadow Self"
        : "Spirit Guide";
    const birthdateText = birthdate instanceof Date && !isNaN(birthdate) ? format(birthdate, "MMMM d") : "Invalid date";
    const outputText = `Write about the ${readingTypeText} of a ${
      gender === "male" ? "man" : "woman"
    } born on ${birthdateText}. Use the second pronoun addressing the ${
      gender === "male" ? "man" : "woman"
    }. ${questionText}`;
    setSpintax(outputText);
  } else {
    setSpintax("Please fill in all the fields.");
  }
};



  return (
    <div className="App">
      <h1>ChatGPT Prompt Generator</h1>
      <DateDropdown onSelect={setBirthdate} />
      <GenderDropdown onSelect={setGender} />
      <ReadingTypeDropdown onSelect={setReadingType} />
      <GenerateButton onClick={handleGenerateClick} />

      <div className="spintax-output">{spintax}</div>
    </div>
  );
}

export default App;
