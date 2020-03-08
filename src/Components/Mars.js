/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

export default function Mars() {
  const [data, setData] = useState({});

  const apiKey = 'DEMO_KEY';

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`,
      )
      .then(response => {
        const random = Math.floor(Math.random() * response.data.photos.length);
        setData(response.data.photos[random]);
      })
      .catch(err => console.log(err));
  }, []);

  if (!data.img_src)
    return (
      <h3
        css={css`
          color: whitesmoke;
          font-size: 22px;
          font-weight: normal;
          margin-top: 100px;
        `}>
        Loading...
      </h3>
    );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;
      `}
      className="mars">
      <Header date={data.earth_date} header={'Random Mars Rover Image from:'} />
      <img
        css={css`
          min-width: 50%;
          max-width: 75%;
          padding: 50px 0;
        `}
        src={data.img_src}
        alt={'Mars'}
      />
      <p
        css={css`
          width: 65%;
          max-width: 780px;
          text-align: left;
          color: whitesmoke;
          font-size: 22px;
          line-height: 1.5;
          padding-bottom: 50px;
        `}>
        Randomly selected image collected by NASA's Curiosity, Opportunity, and
        Spirit rovers on Mars.
      </p>
    </div>
  );
}
