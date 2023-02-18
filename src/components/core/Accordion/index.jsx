import React, { useState } from 'react'

import './styles.css'

function Accordion() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  
  return (
    <div className='wrapper-accordion'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item' key={i}>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item.menu}</h2>
            </div>
            <div className={`content ${selected === i && 'show'}`}>
              {item.itens.map((menuItem, j) => (
                <div className='item-click' key={menuItem.id}>
                  <p>{menuItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Accordion

const data = [
  {
    menu: 'Bebidas',
    itens: [
      {
        name: 'Drinks Clássicos',
        id: 1
      },
      {
        name: 'Drinks Autorais',
        id: 2
      },
      {
        name: 'Shots',
        id: 3
      },
      {
        name: 'Soft Drinks',
        id: 4
      },
      {
        name: 'Garrafas e Doses',
        id: 5
      },
      {
        name: 'Bebidas Não Alcólicas',
        id: 6
      },
      {
        name: 'Cervejas',
        id: 7
      }
    ]
  },
  // {
  //   menu: 'Diversos',
  //   itens: [
  //     {
  //       name: 'Mangeira',
  //       id: 3
  //     },
  //     {
  //       name: 'Mascara',
  //       id: 4
  //     }
  //     ,
  //     {
  //       name: 'Piteira',
  //       id: 5
  //     }
  //   ]
  // },
]
