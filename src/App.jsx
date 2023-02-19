import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top'
import { v4 as uuidv4 } from 'uuid';
import Contact from './components/common/Contact';
import Notice from './components/common/Notice'
import Patronage from './components/common/Patronage';
import Sections from './components/common/Sections'
import Accordion from './components/core/Accordion'
import Banner from './components/core/Banner'
import Footer from './components/core/Footer';
import Nav from './components/core/Nav'


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
];

function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionSelect = (sectionName) => {
    const section = data.find((item) =>
      item.itens.find((menuItem) => menuItem.name === sectionName)
    );

    if (section) {
      const selectedItem = section.itens.find(item => item.name === sectionName);
      setSelectedSection(selectedItem.name);
    }
  };

  return (
    <>
      <ScrollToTop smooth viewBox="0 0 256 256" className="btnUp" color="#222" top={100} />  
      <Nav />
      <Banner />
      <Notice click={'Clique para interagir!'} />
      <Accordion handleSectionSelect={handleSectionSelect} />
      <Sections selectedSection={selectedSection} />
      <Notice />
      <Patronage />
      <Contact />
      <Footer />
    </>
  )
}

export default App


