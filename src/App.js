import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './Components/Nav';
import APOD from './Components/APOD';
import Mars from './Components/Mars';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #010101;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  text-align: center;
}
`;

export default function App() {
  const [onApod, setOnApod] = useState(true);
  const [onMars, setOnMars] = useState(false);

  const showApod = () => {
    setOnApod(true);
    setOnMars(false);
  };

  const showMars = () => {
    setOnApod(false);
    setOnMars(true);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Nav showApod={showApod} showMars={showMars} />
      {onApod && <APOD />}
      {onMars && <Mars />}
    </div>
  );
}
