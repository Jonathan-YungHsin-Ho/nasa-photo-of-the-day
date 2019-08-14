import React, { useState, useEffect } from 'react';
import Header from './APOD_header';
import axios from 'axios';
import './APOD.css';

export default function APOD(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setData(response.data);
      });
  }, []);

  console.log(data);

  return (
    <div className="APOD">
      <Header date={data.date} title={data.title} />
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
}
