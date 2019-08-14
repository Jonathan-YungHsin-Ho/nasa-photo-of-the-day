import React from 'react';
import './APOD.css';

export default function Header(props) {
  return (
    <>
      <h2>NASA's APOD for: {props.date}</h2>
      <h1>{props.title}</h1>
    </>
  );
}
