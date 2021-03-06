import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const StyledForm = styled.form`
  width: 600px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    width: 85%;
  }
`;

const StyledSelect = styled.select`
  padding: 0 1%;
  font-size: 18px;
  border: none;
  background-color: whitesmoke;

  @media screen and (max-width: 700px) {
    flex-grow: 1;
    height: 49px;
  }
`;

const SelectButton = styled(StyledButton)`
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledSelect name="month" onChange={e => props.setMm(e.target.value)}>
        {monthArray.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect name="day" onChange={e => props.setDd(e.target.value)}>
        {dayArray.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect name="year" onChange={e => props.setYyyy(e.target.value)}>
        {yearArray.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </StyledSelect>
      <SelectButton>Select Date</SelectButton>
    </StyledForm>
  );
}
