import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import './APOD.css';

export default function Mars() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
      )
      .then(response => {
        const random = Math.floor(Math.random() * response.data.photos.length);
        setData(response.data.photos[random]);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data.img_src) return <h4>Loading...</h4>;

  return (
    <div className="mars">
      <Header date={data.earth_date} header={'Random Mars Rover Image from:'} />
      <img src={data.img_src} alt={'Mars'} />
      <p>
        Randomly selected image collected by NASA's Curiosity, Opportunity, and
        Spirit rovers on Mars.
      </p>
    </div>
  );
}
