import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const DateDropdown = ({ onSelect }) => {
  const handleDateChange = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const selectedDate = `${date.getDate()} of ${monthNames[date.getMonth()]}`;
    onSelect({ value: selectedDate });
  };

  return (
    <div className="date-dropdown">
      <label htmlFor="birthdate">Birthdate:</label>
      <DatePicker
        id="birthdate"
        placeholderText="Select a date"
        onChange={handleDateChange}
        dateFormat="MMMM d"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        minDate={new Date('1900-01-01')}
        maxDate={new Date('')}
        customInput={<FontAwesomeIcon icon={faCalendarAlt} />}
      />
    </div>
  );
};

export default DateDropdown;
