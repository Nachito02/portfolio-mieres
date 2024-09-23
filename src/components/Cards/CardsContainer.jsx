import React from 'react'
import cards from '../../data/cards.json'
import Cards from './Cards'
import style from './CardsContainer.module.css'
const CardsContainer = () => {
  return (
    <div className={style.cards_container}>
        {cards.cards.map((card, index) => (
            <Cards key={index} title={card.title} path={card.path}  year={card.year} image={card.image} />
        ))}
    </div>
  )
}

export default CardsContainer