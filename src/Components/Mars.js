import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #010101;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const StyledH3 = styled.h3`
  color: whitesmoke;
  font-size: 22px;
  font-weight: normal;
  margin-top: 100px;
`;

const StyledImg = styled.img`
  min-width: 50%;
  max-width: 75%;
  padding: 100px 0;
`;

const StyledP = styled.p`
  width: 65%;
  max-width: 780px;
  text-align: left;
  color: whitesmoke;
  font-size: 22px;
  line-height: 1.5;
  padding-bottom: 50px;
`;

export default function Mars() {
  const [data, setData] = useState({});

  const apiKey = 'DEMO_KEY';

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`,
      )
      .then(response => {
        const random = Math.floor(Math.random() * response.data.photos.length);
        setData(response.data.photos[random]);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data.img_src) return <StyledH3>Loading...</StyledH3>;

  return (
    <StyledDiv className="mars">
      <Header date={data.earth_date} header={'Random Mars Rover Image from:'} />
      <StyledImg src={data.img_src} alt={'Mars'} />
      <StyledP>
        Randomly selected image collected by NASA's Curiosity, Opportunity, and
        Spirit rovers on Mars.
      </StyledP>
    </StyledDiv>
  );
}
