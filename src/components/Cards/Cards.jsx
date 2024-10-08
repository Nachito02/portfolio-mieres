import React from 'react';
import style from './Cards.module.css';
import { useNavigate } from 'react-router-dom'

const Cards = ({ title, year, image, path }) => {
  const navigate= useNavigate();

  return (
    <div className={style.card} onClick={() => {navigate(path)}}>
      <div className={style.imageContainer}>
        <img src={image} alt="" />
        <div className={style.textOverlay}>
          <p className={style.title}>{title}</p>
       
        </div>
      </div>
    </div>
  );
};

export default Cards;
