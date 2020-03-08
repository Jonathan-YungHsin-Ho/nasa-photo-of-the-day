import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const StyledDiv = styled.div`
  background-color: #ed161f;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 0 1%;
  width: 100%;
`;

export default function Nav(props) {
  return (
    <StyledDiv>
      <StyledButton onClick={() => props.showApod()}>APOD</StyledButton>
      <StyledButton onClick={() => props.showMars()}>
        Mars Rover Photos
      </StyledButton>
    </StyledDiv>
  );
}
