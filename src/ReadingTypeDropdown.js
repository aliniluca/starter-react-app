import React from 'react';
import Select from 'react-select';

const ReadingTypeDropdown = ({ onSelect }) => {
  const options = [
    { value: 'Higher Self', label: 'Higher Self' },
    { value: 'Shadow Self', label: 'Shadow Self' },
    { value: 'Spirit Guide', label: 'Spirit Guide' },
  ];

  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder="Select a reading type"
      className="reading-type-dropdown"
    />
  );
};

export default ReadingTypeDropdown;
