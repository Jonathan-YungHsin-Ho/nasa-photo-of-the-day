import React, { useState, useEffect } from 'react';
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

  // useEffect(() => {
  //   if (onApod) {
  //     document.querySelector('.APOD').style.display = 'flex';
  //   } else {
  //     document.querySelector('.APOD').style.display = 'none';
  //   }
  // if (onMars) {
  //   document.querySelector('.mars').style.display = 'block';
  // } else {
  //   document.querySelector('.mars').style.display = 'none';
  // }
  // }, [onApod, onMars]);

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
