import React from 'react'

import GinTonica from '../../../assets/img/drinks/gintonica.jpeg'
import './styles.css'

function CardDrinks({img, title, description, price}) {
  console.log("description", description)
  return (
    <>
        <div class="card-drinkd">
          <img className={`${img === null ? 'hide' : img }`} src={img} alt="Gin Tônica" />
          <div class="cardHeaderDrinks">
            <h1>{title}</h1>
            <h2 className={`${description === null && 'hide'}`}>{description}</h2>
          </div>
          <div class="cardBottomDrinks">
            <h1>R$ {price}</h1>
          </div>
        </div>
    </>
  )
}

export default CardDrinks