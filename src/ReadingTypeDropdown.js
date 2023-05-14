import React from 'react';
import Select from 'react-select';

const ReadingTypeDropdown = ({ onSelect }) => {
  const options = [
    { value: 'HigherSelf', label: 'HigherSelf' },
    { value: 'ShadowSelf', label: 'ShadowSelf' },
    { value: 'SpiritGuide', label: 'SpiritGuide' },
    { value: 'AnimalSpirit', label: 'AnimalSpirit' },
    { value: 'DemonSpirit', label: 'DemonSpirit' },
    { value: 'Starseed', label: 'Starseed' },
      { value: 'Soulmate', label: 'Soulmate' },
    { value: 'Twinflame', label: 'Twinflame' },
    
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
