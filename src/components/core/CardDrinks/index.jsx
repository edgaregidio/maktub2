import React from 'react'

import './styles.css'

function CardDrinks({img, title, description, price}) {
  return (
    <>
        <div className="card-drinkd">
          <img className={`${img === null ? 'hide' : img }`} src={img} alt="Gin Tônica" />
          <div className="cardHeaderDrinks">
            <h1>{title}</h1>
            <h2 className={`${description === null && 'hide'}`}>{description}</h2>
          </div>
          <div className="cardBottomDrinks">
            <h1>R$ {price}</h1>
          </div>
        </div>
    </>
  )
}

export default CardDrinks