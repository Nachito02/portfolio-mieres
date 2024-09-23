import React from 'react'
import cards from '../../data/estilismo.json'
import style from './PageCardContainer.module.css'
import PageCard from './PageCard'
const PageCardContainer = () => {
    return (
        <div className={style.cards_container}>
            {cards.cards.map((card, index) => (
                <PageCard key={index} title={card.title} path={card.link} year={card.year} image={card.image} />
            ))}
        </div>
    )
}

export default PageCardContainer