import React, { useState } from 'react';
import './App.css';

import Nav from './Components/Nav';
import APOD from './Components/APOD';
import Mars from './Components/Mars';

function App() {
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

export default App;
