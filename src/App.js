import React, { useState } from 'react';
import DateDropdown from './DateDropdown';
import GenderDropdown from './GenderDropdown';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import GenerateButton from './GenerateButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import AWS from 'aws-sdk';
import './App.css';

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION
});

const bucket = 'cyclic-tame-teal-jellyfish-wig-sa-east-1';

function App() {
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [readingType, setReadingType] = useState(null);
  const [outputText, setOutputText] = useState('');

  const handleButtonClick = (fileNumber) => {
    if (readingType) {
      s3.getObject({ Bucket: bucket, Key: `${readingType}/${fileNumber}.txt` }, function(err, data) {
        if (err) console.error(err);
        else setOutputText(data.Body.toString());
      });
    }
  };

  const handleGenerateClick = () => {
    const output = `Write about the ${readingType} of a ${gender === "male" ? "man" : "woman"} born on ${format(birthdate, "MMMM d")}. Use the second pronoun addressing the ${gender === "male" ? "man" : "woman"}.`;
    setOutputText(output);
  };

  return (
    <div className="App">
      <h1>ChatGPT Prompt Generator</h1>
      <DateDropdown onSelect={setBirthdate} />
      <GenderDropdown onSelect={setGender} />
      <ReadingTypeDropdown onSelect={setReadingType} />
      <GenerateButton onClick={handleGenerateClick} />
      {[...Array(30)].map((_, i) => (
        <button key={i} onClick={() => handleButtonClick(i + 1)}>
          {i + 1}
        </button>
      ))}
      <div className="output">{outputText}</div>
    </div>
  );
}

export default App;
