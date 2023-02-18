import React from 'react'

import GinTonica from '../../../assets/img/drinks/gintonica.jpeg'
import './styles.css'

function CardDrinks({img, title, description, price}) {
  return (
    <>
        <div class="card-drinkd">
          <img src={img} alt="Gin Tônica" />
          <div class="cardHeaderDrinks">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div class="cardBottomDrinks">
            <h1>R$ {price}</h1>
          </div>
        </div>
    </>
  )
}

export default CardDrinks