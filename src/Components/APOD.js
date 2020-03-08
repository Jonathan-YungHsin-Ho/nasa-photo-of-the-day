import React, { useState, useEffect } from 'react';
import Header from './Header';
import DateForm from './DateForm';
import axios from 'axios';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media screen and (max-width: 700px) {
    padding-bottom: 50px;
`;

const StyledH3 = styled.h3`
  color: whitesmoke;
  font-size: 22px;
  font-weight: normal;
  margin-top: 100px;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledP = styled.p`
  width: 65ch;
  max-width: 85%;
  text-align: left;
  color: whitesmoke;
  font-size: 20px;
  line-height: 1.5;
  margin: 50px 0 50px;

  @media screen and (max-width: 700px) {
    margin: 30px 0 30px;
  }
`;

const RandomButton = styled(StyledButton)`
  width: 600px;

  @media screen and (max-width: 700px) {
    width: 85%;
  }
`;

export default function APOD(props) {
  const today = new Date();

  const [dd, setDd] = useState(String(today.getDate()).padStart(2, '0'));
  const [mm, setMm] = useState(String(today.getMonth() + 1).padStart(2, '0'));
  const [yyyy, setYyyy] = useState(today.getFullYear());

  const [data, setData] = useState({});
  const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);

  const randomDate = () => {
    const day = Math.floor(Math.random() * 28 + 1);
    const month = Math.floor(Math.random() * 12 + 1);
    const year = Math.floor(Math.random() * 24 + 1996);
    setDate(`${year}-${month}-${day}`);
  };

  const apiKey = 'DEMO_KEY';

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log(err);
        alert('Sorry, please try a different date!');
      });
  }, [date]);

  if (!data.url) return <StyledH3>Loading...</StyledH3>;

  console.log(date);

  return (
    <StyledDiv>
      <Header
        date={data.date}
        header={`NASA's Astronomy Picture Of the Day for:`}
        title={data.title}
      />
      <StyledImg src={data.url} alt={data.title} />
      <StyledP>{data.explanation}</StyledP>
      <DateForm
        dd={dd}
        setDd={setDd}
        mm={mm}
        setMm={setMm}
        yyyy={yyyy}
        setYyyy={setYyyy}
        date={date}
        setDate={setDate}
      />
      <br />
      <RandomButton onClick={() => randomDate()}>Random Date</RandomButton>
    </StyledDiv>
  );
}
