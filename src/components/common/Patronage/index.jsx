import React from 'react'

import './styles.css'

import Logobeefeater from '../../../assets/img/logobeefeater.png'
import logochivas from '../../../assets/img/logochivas.png'

function Patronage() {
  return (
    <div class="imgPartners">
      <img src={Logobeefeater} alt="Logo Beefeater" />
      <img src={logochivas} alt="Logo Chivas" />
    </div>
  )
}

export default Patronage