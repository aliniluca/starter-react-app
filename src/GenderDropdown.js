import React from 'react';
import Select from 'react-select';

const GenderDropdown = ({ onSelect }) => {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder="Select your gender"
      className="gender-dropdown"
    />
  );
};

export default GenderDropdown;
