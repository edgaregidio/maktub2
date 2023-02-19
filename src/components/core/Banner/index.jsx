import React from 'react'
import { Icon } from '@iconify/react';

import BannerMenu from '../../../assets/banner2.jpg'

import './styles.css'


function Banner() {
  return (
    <>
      <div className="banner">
        <img src={BannerMenu} />
        <div className="bnt-cardapio">
          <a href="#">
            <h1>CARDÁPIO</h1>
            <Icon icon="material-symbols:keyboard-arrow-down-rounded" color='#fec10f' fontSize={52} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Banner