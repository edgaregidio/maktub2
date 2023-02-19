import React from 'react'
import CardDrinks from '../../core/CardDrinks'
import { v4 as uuidv4 } from 'uuid';

import GinTonica from '../../../assets/img/drinks/gintonica.jpeg'
import MoscowMule from '../../../assets/img/drinks/moscow.jpeg'
import Tentacao from '../../../assets/img/drinks/tentacao.jpeg'
import Vivalavida from '../../../assets/img/drinks/vivalavida.jpeg'
import Dosedesejo from '../../../assets/img/drinks/dosedesejo.jpeg'
import Foradalei from '../../../assets/img/drinks/foradalei.jpeg'
import Sunset from '../../../assets/img/drinks/sunset.jpeg'
import Caribe from '../../../assets/img/drinks/caribe.jpeg'
import Caipirinhamaktub from '../../../assets/img/drinks/caipirinhamaktub.jpeg'
import Applegreen from '../../../assets/img/drinks/applegreen.jpeg'
import Pinkice2 from '../../../assets/img/drinks/pinkice2.jpeg'
import Paixaotropical from '../../../assets/img/drinks/paixaotropical.jpeg'
import Ginrose from '../../../assets/img/drinks/ginrose.jpeg'
import Passiflora from '../../../assets/img/drinks/passiflora.jpeg'
import Aloha from '../../../assets/img/drinks/aloha.jpeg'
import Milano from '../../../assets/img/drinks/milano.jpeg'
import Cheirobom from '../../../assets/img/drinks/cheirobom.jpeg'
import Alua from '../../../assets/img/drinks/alua.jpeg'
import Way from '../../../assets/img/drinks/way.jpg'
import Pinadescolada from '../../../assets/img/drinks/pinadescolada.jpeg'
import Cherry from '../../../assets/img/drinks/cherry.jpeg'
import Spicyold from '../../../assets/img/drinks/spicyold.jpeg'
import Whiskycream from '../../../assets/img/drinks/whiskycream.jpg'
import Royalsalute from '../../../assets/img/bebidas/royalsalute.jpeg'
import Chivas18 from '../../../assets/img/bebidas/chivas18.jpg'
import ChivasXV from '../../../assets/img/bebidas/chivasXV.jpg'
import Chivas12 from '../../../assets/img/bebidas/chivas12.jpg'
import Ballantines12 from '../../../assets/img/bebidas/ballantines12.jpg'
import Ballantinesfinest from '../../../assets/img/bebidas/ballantinesfinest.png'
import jinbeam from '../../../assets/img/bebidas/jinbeam.jpg'
import Ginbeefeaterpink from '../../../assets/img/bebidas/ginbeefeaterpink.jpg'
import Ginbeefeater from '../../../assets/img/bebidas/ginbeefeater.jpg'
import AbsolutElyx750 from '../../../assets/img/bebidas/absolutElyx750.jpg'
import Absolut from '../../../assets/img/bebidas/absolut.jpg'
import Wyborowa2 from '../../../assets/img/bebidas/wyborowa2.jpg'
import Licor43 from '../../../assets/img/bebidas/licor43.jpg'
import Josecuervo from '../../../assets/img/bebidas/josecuervo.jpg'

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
        {
          id_itens: uuidv4(),
          img: Dosedesejo,
          title: 'Dose Desejo',
          description: 'Absolut, limão, laranja e leite condensado.',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Foradalei,
          title: 'Fora da Lei',
          description: 'Chivas, Blueberry, maça verde e redbull regular (normal).',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Sunset,
          title: 'Sunset',
          description: 'Gin, limão, limão siciliano e H2o',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Caribe,
          title: 'Caribe',
          description: 'Blueberry, Gin e RedBull Coco e açai.',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Caipirinhamaktub,
          title: 'Caipirinha Maktub',
          description: 'Pinga, Limão, xarope de açúcar e espuma de gengibre.',
          price: '20,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Applegreen,
          title: 'Apple Green',
          description: 'Vodka, Maça Verde e Refrigerante de Limão.',
          price: '26,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Pinkice2,
          title: 'Pink Ice',
          description: 'Smirnoff Ice, Creme de morango e Yakult.',
          price: '35,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Paixaotropical,
          title: 'Paixão tropical',
          description: 'Gin Beefeater, Maracujá, Limão, RedBull.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ginrose,
          title: 'Gin Rose',
          description: 'Gin, Morango, Limão e Pink limonade.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Passiflora,
          title: 'Passiflora',
          description: 'Gin Beefeater, Maracujá, Chá de frutas vermelhas, Água Tônica.',
          price: '26,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Aloha,
          title: 'Aloha!',
          description: 'Gin Beefeater, Chá de hibisco, Laranja.',
          price: '27,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Milano,
          title: 'Milano',
          description: 'Vodka Absolut Citron, Aperol, H2o! Limoneto, manjericão.',
          price: '24,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Cheirobom,
          title: 'Cheiro de Perfume Bom',
          description: 'Fiu-Fiu Tangerina com acerola, RedBull Cranberry, perfume de violeta finalizado na mesa.',
          price: '24,00'
        },
        {
          id_itens: uuidv4(),
          img: Alua,
          title: 'Aluá',
          description: 'Cajazinha, limão, gengibre e água com gás.',
          price: '25,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Way,
          title: 'Way Of Life',
          description: 'Abacaxi com hortelã, Red Bull.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Pinadescolada,
          title: 'Piña Descolada',
          description: 'Rum Malibu, abacaxi, limão, água de coco.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Cherry,
          title: 'Cherry',
          description: 'Fiu Fiu Aborígene, laranja, cereja, hortelã e limoneto.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Spicyold,
          title: 'Spicy old Fhasioned',
          description: 'Whisky Bourbon Jin Bean, especiarias, Bitter.',
          price: '27,00'
        }
    ],
  }, 
  {
    section: 'Shots',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Whiskycream,
          title: 'Shot Maktub',
          description: 'Blend de creme, Baunilha Gourmet e Whisky.',
          price: '14,00'
        }, 
        {
          id_itens: uuidv4(),
          img: null,
          title: 'Longest Island (5 Shots)',
          description: 'Tequila, Vodka Absolut, Gin Beefeater, Rum Havana 3 anos, xarope à escolha.',
          price: '45,00'
        }, 
    ],
  }, 
  {
    section: 'Soft Drinks',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: null,
          title: 'Soda Italiana',
          description: 'Maracujá | Maçã Verde | Blueberry',
          price: '12,00'
        }, 
    ],
  }, 
  {
    section: 'Garrafas e Doses',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Royalsalute,
          title: 'Royal Salute 21 anos',
          description: null,
          price: '1190,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Chivas18,
          title: 'Chivas 18 - 750 ml',
          description: null,
          price: '619,00'
        }, 
        {
          id_itens: uuidv4(),
          img: ChivasXV,
          title: 'Chivas XV - 750 ml',
          description: null,
          price: '379,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Chivas12,
          title: 'Chivas 12 - 1l',
          description: null,
          price: '269,00 | R$ 15,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ballantines12,
          title: 'Ballantines 12 - 1l',
          description: null,
          price: '239,00 | R$ 15,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ballantinesfinest,
          title: 'Ballantines Finest - 1l',
          description: null,
          price: '199,00 | R$ 13,00'
        }, 
        {
          id_itens: uuidv4(),
          img: jinbeam,
          title: 'Jin Beam - 1l',
          description: null,
          price: '219,00 | R$ 17,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ginbeefeaterpink,
          title: 'Gin Beefeater Pink - 750 ml',
          description: null,
          price: '249,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ginbeefeater,
          title: 'Gin Beefeater - 750 ml',
          description: null,
          price: '219,00 | R$ 17,00'
        }, 
        {
          id_itens: uuidv4(),
          img: AbsolutElyx750,
          title: 'Absolut Elyx 750 ml',
          description: null,
          price: '249,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Absolut,
          title: 'Absolut - 1l',
          description: null,
          price: '199,00 | R$ 13,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Wyborowa2,
          title: 'Wyborowa - 1l',
          description: null,
          price: '130,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Licor43,
          title: 'Licor 43 - 700 ml',
          description: null,
          price: '279,00 | R$ 18,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Josecuervo,
          title: 'Tequila Jose Cuervo - 750 ml',
          description: null,
          price: '210,00 | R$ 16,00'
        }, 
    ],
  },
  // {
  //   section: 'Bebidas não Alcólicas',
  //   id_section: uuidv4(),
  //   itens: [
  //       {
  //         id_itens: uuidv4(),
  //         img: null,
  //         title: 'Soda Italiana',
  //         description: 'Maracujá | Maçã Verde | Blueberry',
  //         price: '12,00'
  //       }, 
  //   ],
  // },  
]
 console.log("data", data)
 