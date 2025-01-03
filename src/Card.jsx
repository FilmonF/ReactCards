import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt="my image" />
    </div>
  );
}

export default Card;
