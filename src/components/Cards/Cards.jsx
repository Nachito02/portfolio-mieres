import React from 'react';
import style from './Cards.module.css';

const Cards = ({ title, year, image }) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={image} alt="" />
        <div className={style.textOverlay}>
          <h1>{title}</h1>
       
        </div>
      </div>
    </div>
  );
};

export default Cards;
