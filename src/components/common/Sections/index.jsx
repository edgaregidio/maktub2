import React from 'react'
import CardDrinks from '../../core/CardDrinks'
import { v4 as uuidv4 } from 'uuid';

import GinTonica from '../../../assets/img/drinks/gintonica.jpeg'
import MoscowMule from '../../../assets/img/drinks/moscow.jpeg'
import Tentacao from '../../../assets/img/drinks/tentacao.jpeg'
import Vivalavida from '../../../assets/img/drinks/vivalavida.jpeg'


import './styles.css'


function Sections() {
  return (
    <>
      {data.map((section, i) => (
        <div className="wrapper-section" key={section.id_section}>
          <div className="name-section">
            <p>{section.section}</p>
          </div>
          {section.itens.map((item) => (
            <CardDrinks
              key={item.id_itens}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      ))}
    </>

  )
}

export default Sections

const data = [
  {
    section: 'Drinks Clássicos',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: GinTonica,
          title: 'Gin Tonica',
          description: 'Gin Beefeater, Água Tônica, Limão Siciliano, Alecrim.',
          price: '26,00'
        }, 
        {
          id_itens: uuidv4(),
          img: MoscowMule,
          title: 'Moscow Mule',
          description: 'Vodka Absolut, Xarope de açucar, Limão e espuma de gengibre.',
          price: '27,00'
        }, 
    ],
  }, 
  {
    section: 'Drinks Autorias',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Tentacao,
          title: 'Tentação',
          description: 'Gin Beefeater, Morango, limão siciliano, limão taiti, RedBull Melancia e Hortelã.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Vivalavida,
          title: 'Viva la Vida',
          description: 'Abacaxi, rum de coco, limão e açucar.',
          price: '29,00'
        }, 
    ],
  }, 
]
 console.log("data", data)
 