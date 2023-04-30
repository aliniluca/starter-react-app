import React from 'react';

const GenerateButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="generate-button">
      Generate
    </button>
  );
};

export default GenerateButton;
