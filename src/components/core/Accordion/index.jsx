import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


import './styles.css'

function Accordion({handleSectionSelect}) {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  const handleItemClick = (itemName) => {
    console.log("itemName", itemName)
    handleSectionSelect(itemName);
    // setSelected(null);
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
                <div className='item-click' key={menuItem.id} onClick={() => handleItemClick(menuItem.name)}>
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
        id: uuidv4()
      },
      {
        name: 'Drinks Autorais',
        id: uuidv4()
      },
      {
        name: 'Shots',
        id: uuidv4()
      },
      {
        name: 'Soft Drinks',
        id: uuidv4()
      },
      {
        name: 'Garrafas e Doses',
        id: uuidv4()
      },
      {
        name: 'Bebidas Não Alcólicas',
        id: uuidv4()
      },
      {
        name: 'Cervejas',
        id: uuidv4()
      }
    ]
  }
]

