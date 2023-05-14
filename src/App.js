import React, { useState } from 'react';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import AWS from 'aws-sdk';

function App() {
  const [readingType, setReadingType] = useState(null);
  const [text, setText] = useState("");
  
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
  const handleButtonClick = async (number) => {
    if (!readingType) {
      alert('Please select a reading type');
      return;
    }

    const params = {
      Bucket: 'cyclic-tame-teal-jellyfish-wig-sa-east-1',
      Key: `${readingType}/${number}.txt`
    };

    try {
      const data = await s3.getObject(params).promise();
      setText(data.Body.toString());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <ReadingTypeDropdown onSelect={setReadingType} />
      
      {Array.from({ length: 30 }, (_, i) => i + 1).map(number => (
        <button key={number} onClick={() => handleButtonClick(number)}>
          {number}
        </button>
      ))}

      <div className="text-output">{text}</div>
    </div>
  );
}

export default App;
