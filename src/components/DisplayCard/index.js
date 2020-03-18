import React from "react";
import './styles.css';

const DisplayCard = ({ year, title, plot, poster }) => {
  return (
    <div className="details-wrapper">
      <p>{title}</p>
      <img src={poster} height={200} width={200} />
      <p>{plot}</p>
      <p>{year}</p>
    </div>
  );
};

export default DisplayCard;
