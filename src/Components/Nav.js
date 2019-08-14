import React from 'react';

export default function Nav(props) {
  return (
    <div className="nav">
      <button onClick={() => props.showApod()}>APOD</button>
      <button onClick={() => props.showMars()}>Mars Rover Photos</button>
    </div>
  );
}
