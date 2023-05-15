import React, { useState } from 'react';
import ReadingTypeDropdown from './ReadingTypeDropdown';
import S3FS from 's3fs';

const s3fsImpl = new S3FS();

function App() {
  const [readingType, setReadingType] = useState(null);
  const [text, setText] = useState("");
  
  const handleButtonClick = async (number) => {
    if (!readingType) {
      alert('Please select a reading type');
      return;
    }

    try {
      const data = await s3fsImpl.readFile(`${readingType}/${number}.txt`, 'utf8');
      setText(data);
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
