import React, { useEffect } from 'react'
import CardDrinks from '../../core/CardDrinks'
import { scroller } from 'react-scroll';

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
import Buchanan from '../../../assets/img/bebidas/buchanan.png'
import JackDaniels from '../../../assets/img/bebidas/jackdaniels.png'
import Agua from '../../../assets/img/bebidas/agua.jpg'
import Refrigerantes from '../../../assets/img/bebidas/refrigerantes.jpg'
import Extrapower270 from '../../../assets/img/bebidas/extrapower270.jpg'
import Extrapower473 from '../../../assets/img/bebidas/extrapower473.jpg'
import Redbull from '../../../assets/img/bebidas/redbull.jpg'
import Redbulltropical from '../../../assets/img/bebidas/redbulltropical.jpg'
import Redbullmelancia from '../../../assets/img/bebidas/redbullmelancia.png'
import Redbullcoco1 from '../../../assets/img/bebidas/redbullcoco1.jpeg'
import Redbullsugar from '../../../assets/img/bebidas/redbullsugar.webp'
import Stpierre from '../../../assets/img/stpierre.webp'
import Stpierrepink from '../../../assets/img/stpierrepink.jpeg'
import H2o from '../../../assets/img/bebidas/h2o.jpg'
import Guaranabrasil from '../../../assets/img/bebidas/guaranabrasil.jpg'
import Sucolatadelvalle from '../../../assets/img/bebidas/sucolatadelvalle.jpg'
import Honest from '../../../assets/img/bebidas/honest.jpg'
import Aguatonica from '../../../assets/img/bebidas/aguatonica.jpg'
import Aguadecocokerococo200 from '../../../assets/img/bebidas/aguadecocokerococo200.jpeg'
import Heineken from '../../../assets/img/bebidas/heineken.jpg'
import Heineken0 from '../../../assets/img/bebidas/heineken0.jpeg'
import Sol from '../../../assets/img/bebidas/sol.jpg'
import Budweiser from '../../../assets/img/bebidas/budweiser.jpg'
import StellaArtois from '../../../assets/img/bebidas/stellaArtois.jpg'
import Corona from '../../../assets/img/bebidas/corona.jpg'
import Becks from '../../../assets/img/bebidas/becks.jpg'
import Preparo from '../../../assets/img/bebidas/preparo.jpg'

import './styles.css'


function Sections({selectedSection}) {

  useEffect(() => {
  if (selectedSection) {
    const section = data.find((item) => item.section === selectedSection);

    if (section) {
      scroller.scrollTo(section.id_section, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50,
      });
    }
  }
}, [selectedSection]);
  return (
    <>
      {data.map((section, i) => (
        <div className="wrapper-section" key={section.id_section} id={section.id_section}>
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
    section: 'Drinks Cl??ssicos',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: GinTonica,
          title: 'Gin Tonica',
          description: 'Gin Beefeater, ??gua T??nica, Lim??o Siciliano, Alecrim.',
          price: '26,00'
        }, 
        {
          id_itens: uuidv4(),
          img: MoscowMule,
          title: 'Moscow Mule',
          description: 'Vodka Absolut, Xarope de a??ucar, Lim??o e espuma de gengibre.',
          price: '27,00'
        }, 
    ],
  }, 
  {
    section: 'Drinks Autorais',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Tentacao,
          title: 'Tenta????o',
          description: 'Gin Beefeater, Morango, lim??o siciliano, lim??o taiti, RedBull Melancia e Hortel??.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Vivalavida,
          title: 'Viva la Vida',
          description: 'Abacaxi, rum de coco, lim??o e a??ucar.',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Dosedesejo,
          title: 'Dose Desejo',
          description: 'Absolut, lim??o, laranja e leite condensado.',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Foradalei,
          title: 'Fora da Lei',
          description: 'Chivas, Blueberry, ma??a verde e redbull regular (normal).',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Sunset,
          title: 'Sunset',
          description: 'Gin, lim??o, lim??o siciliano e H2o',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Caribe,
          title: 'Caribe',
          description: 'Blueberry, Gin e RedBull Coco e a??ai.',
          price: '29,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Caipirinhamaktub,
          title: 'Caipirinha Maktub',
          description: 'Pinga, Lim??o, xarope de a????car e espuma de gengibre.',
          price: '20,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Applegreen,
          title: 'Apple Green',
          description: 'Vodka, Ma??a Verde e Refrigerante de Lim??o.',
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
          title: 'Paix??o tropical',
          description: 'Gin Beefeater, Maracuj??, Lim??o, RedBull.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Ginrose,
          title: 'Gin Rose',
          description: 'Gin, Morango, Lim??o e Pink limonade.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Passiflora,
          title: 'Passiflora',
          description: 'Gin Beefeater, Maracuj??, Ch?? de frutas vermelhas, ??gua T??nica.',
          price: '26,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Aloha,
          title: 'Aloha!',
          description: 'Gin Beefeater, Ch?? de hibisco, Laranja.',
          price: '27,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Milano,
          title: 'Milano',
          description: 'Vodka Absolut Citron, Aperol, H2o! Limoneto, manjeric??o.',
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
          title: 'Alu??',
          description: 'Cajazinha, lim??o, gengibre e ??gua com g??s.',
          price: '25,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Way,
          title: 'Way Of Life',
          description: 'Abacaxi com hortel??, Red Bull.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Pinadescolada,
          title: 'Pi??a Descolada',
          description: 'Rum Malibu, abacaxi, lim??o, ??gua de coco.',
          price: '28,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Cherry,
          title: 'Cherry',
          description: 'Fiu Fiu Abor??gene, laranja, cereja, hortel?? e limoneto.',
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
          description: 'Tequila, Vodka Absolut, Gin Beefeater, Rum Havana 3 anos, xarope ?? escolha.',
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
          description: 'Maracuj?? | Ma???? Verde | Blueberry',
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
          description: 'Combo com 6 energ??tico',
          price: '290,00 | Combo - R$335,00'
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
          description: `Combo com 6 Red Bull - Dose R$ 13,00`,
          price: '199,00 | Combo - R$ 275,00'
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
          description: 'Combo com 6 ST. Pierre',
          price: '199,00 | Combo - R$ 240,00'
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
        {
          id_itens: uuidv4(),
          img: Buchanan,
          title: "Buchanan's 12 anos - 750 ml",
          description: 'Combo com 5 energ??tico',
          price: '280,00 | Combo - R$ 330,00'
        }, 
        {
          id_itens: uuidv4(),
          img: JackDaniels,
          title: "Whisky Jack Daniel's Garrafa 1 Litro",
          description: 'Combo com 5 energ??tico',
          price: '280,00 | Combo - R$ 325,00'
        }, 
    ],
  },
  {
    section: 'Bebidas N??o Alc??licas',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Agua,
          title: '??gua Mineral',
          description: null,
          price: '3,00'
        },
        {
          id_itens: uuidv4(),
          img: Agua,
          title: '??gua com G??s',
          description: null,
          price: '4,00'
        },
        {
          id_itens: uuidv4(),
          img: Refrigerantes,
          title: 'Refrigerantes Lata',
          description: null,
          price: '5,00'
        },
        {
          id_itens: uuidv4(),
          img: Extrapower270,
          title: 'Extra Power 273ml',
          description: null,
          price: '8,00'
        },
        {
          id_itens: uuidv4(),
          img: Extrapower473,
          title: 'Extra Power 470ml',
          description: null,
          price: '13,00'
        },
        {
          id_itens: uuidv4(),
          img: Redbull,
          title: 'Red Bull Tradicional',
          description: null,
          price: '14,00'
        },
        {
          id_itens: uuidv4(),
          img: Redbulltropical,
          title: 'Red Bull Tropical',
          description: null,
          price: '14,00'
        },
        {
          id_itens: uuidv4(),
          img: Redbullmelancia,
          title: 'Red Bull Melancia',
          description: null,
          price: '14,00'
        },
        {
          id_itens: uuidv4(),
          img: Redbullcoco1,
          title: 'Red Bull Coco e A??ai',
          description: null,
          price: '14,00'
        },
        {
          id_itens: uuidv4(),
          img: Redbullsugar,
          title: 'Red Bull Sugarfree',
          description: null,
          price: '14,00'
        },
        {
          id_itens: uuidv4(),
          img: Stpierre,
          title: 'St Pierre Red Mint',
          description: null,
          price: '8,00'
        },
        {
          id_itens: uuidv4(),
          img: Stpierrepink,
          title: 'St Pierre Pink Lemonade',
          description: null,
          price: '8,00'
        },
        {
          id_itens: uuidv4(),
          img: H2o,
          title: 'H2O',
          description: null,
          price: '5,00'
        },
        {
          id_itens: uuidv4(),
          img: Guaranabrasil,
          title: 'Guaran?? Brasil',
          description: null,
          price: '5,00'
        },
        {
          id_itens: uuidv4(),
          img: Sucolatadelvalle,
          title: 'Suco Lata',
          description: null,
          price: '5,00'
        },
        {
          id_itens: uuidv4(),
          img: Honest,
          title: 'Suco Da Fruta Honest',
          description: null,
          price: '7,00'
        },
        {
          id_itens: uuidv4(),
          img: Aguatonica,
          title: '??gua T??nica Ant??rctica',
          description: null,
          price: '5,00'
        },
        {
          id_itens: uuidv4(),
          img: Aguadecocokerococo200,
          title: '??gua de Coco P.',
          description: null,
          price: '5,00'
        }
    ],
  },  
  {
    section: 'Cervejas',
    id_section: uuidv4(),
    itens: [
        {
          id_itens: uuidv4(),
          img: Heineken,
          title: 'Heineken Long Neck',
          description: null,
          price: '12,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Heineken0,
          title: 'Heineken Zero Long Neck',
          description: null,
          price: '12,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Sol,
          title: 'Sol Long Neck',
          description: null,
          price: '10,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Budweiser,
          title: 'Budweiser Long Neck',
          description: null,
          price: '10,00'
        }, 
        {
          id_itens: uuidv4(),
          img: StellaArtois,
          title: 'Stella Artois Long Neck',
          description: null,
          price: '10,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Corona,
          title: 'Corona Long Neck',
          description: null,
          price: '10,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Becks,
          title: 'Becks Long Neck',
          description: null,
          price: '11,00'
        }, 
        {
          id_itens: uuidv4(),
          img: Preparo,
          title: 'Preparo de Cozumel',
          description: null,
          price: '5,00'
        }
    ],
  }, 
]
 