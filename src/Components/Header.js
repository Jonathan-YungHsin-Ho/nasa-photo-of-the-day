import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  width: 100%;
  background-color: #393939;
  color: white;
  font-size: 32px;
  padding: 10px 0;
  margin-top: 49px;
  margin-bottom: 0;

  @media screen and (max-width: 700px) {
    font-size: 22px;
  }

  @media screen and (max-width: 416px) {
    margin-top: 73px;
  }
`;

const StyledH2 = styled.h2`
  width: 100%;
  background-color: #0066b3;
  color: white;
  font-size: 48px;
  text-transform: uppercase;
  padding: 10px 0;
  margin-top: 0;

  @media screen and (max-width: 700px) {
    font-size: 36px;
    margin-bottom: 0;
  }
`;

export default function Header(props) {
  return (
    <>
      <StyledH1>
        {props.header} {props.date}
      </StyledH1>
      <StyledH2>{props.title}</StyledH2>
    </>
  );
}
