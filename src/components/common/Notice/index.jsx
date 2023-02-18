import React from 'react'

import './styles.css'

function Notice({click}) {
  return (
    <>
      <div className="infoPartners">
        <h1>PROIBÍDO A VENDA DE BEBIDAS ALCOÓLICAS PARA MENORES DE 18 ANOS</h1>
      </div>
      <h4 className='click'>{click}</h4>
    </>
  )
}

export default Notice