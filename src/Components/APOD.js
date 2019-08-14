import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import './APOD.css';

export default function APOD(props) {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const [data, setData] = useState({});
  const [date, setDate] = useState(`${yyyy}-${mm}-${dd}`);

  const randomDate = () => {
    const day = Math.floor(Math.random() * 28 + 1);
    const month = Math.floor(Math.random() * 12 + 1);
    const year = Math.floor(Math.random() * 24 + 1996);
    setDate(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        setData(response.data);
      });
  }, [date]);

  console.log(date);

  return (
    <div className="APOD">
      <Header
        date={data.date}
        header={`NASA's Astronomy Picture Of the Day for:`}
        title={data.title}
      />
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
      <button onClick={() => randomDate()}>Random Date</button>
    </div>
  );
}
