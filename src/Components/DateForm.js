import React from 'react';

export default function DateForm(props) {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayArray = [];
  for (let i = 1; i <= 31; i++) {
    dayArray.push(i);
  }

  const yearArray = [];
  const today = new Date();
  const yyyy = today.getFullYear();
  for (let i = yyyy; i >= 1995; i--) {
    yearArray.push(i);
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.setDate(`${props.yyyy}-${props.mm}-${props.dd}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="month" onChange={e => props.setMm(e.target.value)}>
        {monthArray.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select name="day" onChange={e => props.setDd(e.target.value)}>
        {dayArray.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select name="year" onChange={e => props.setYyyy(e.target.value)}>
        {yearArray.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button>Select Date</button>
    </form>
  );
}
