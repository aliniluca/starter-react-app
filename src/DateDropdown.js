import React from 'react';
import Select from 'react-select';

const DateDropdown = ({ onSelect }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const options = days.flatMap(day =>
    months.map(month => ({
      value: `${day} of ${month}`,
      label: `${day} of ${month}`,
    }))
  );

  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder="Select your birthdate"
      className="date-dropdown"
    />
  );
};

export default DateDropdown;
