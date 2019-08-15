import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const StyledDiv = styled.div`
  background-color: #010101;
  display: flex;
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
