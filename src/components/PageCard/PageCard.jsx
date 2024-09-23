import React from 'react';
import { useNavigate } from 'react-router-dom'
import style from './PageCard.module.css'

const PageCard = ({ title, year, image, path }) => {
  const navigate= useNavigate();

  return (
    <a href={path} target='_blank' className={style.card} >
      <div className={style.imageContainer}>
        <img src={image} alt="" />
        <div className={style.textOverlay}>
        
       
        </div>
      </div>
    </a>
  );
};

export default PageCard;
