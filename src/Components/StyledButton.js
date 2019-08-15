import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 0;
  width: 50%;
  border: none;
  background-color: #ed161f;
  color: whitesmoke;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #b40e16;
  }
`;
