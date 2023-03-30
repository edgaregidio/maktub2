import React from 'react'
import { Icon } from '@iconify/react';
import Fotomaktub from '../../../assets/img/fotomaktub.png'

import './styles.css'

function Contact() {
  return (
    <section id="contact">
      <div class="titleContact">
        <h1>Contato</h1>
      </div>

      <div class="cardContact">

        <div class="infosContact">
          <ul>
            <li>
              <h1 className='contact-title'>Entre em contato!</h1>
            </li>
            <li>
              <Icon icon="ic:baseline-whatsapp" color="#fec10f" width="24" height="24" />
              <a href="https://api.whatsapp.com/send?phone=5562996043213" target="_blank">
                <h1>(62) 996043213</h1>
              </a>
            </li>
            <li>
              <Icon icon="ph:instagram-logo" color="#fec10f" width="24" height="24" />
              <a href="https://www.instagram.com/maktublounge/" target="_blank">
                <h1>@maktublounge</h1>
              </a>
            </li>
            <li>
              <Icon icon="ph:instagram-logo" color="#fec10f" width="24" height="24" />
              <a href="https://www.instagram.com/tabacaria_maktub/" target="_blank">
                <h1>@tabacaria_maktub</h1>
              </a>
            </li>
            <li>
              <Icon icon="ri:facebook-circle-line" color="#fec10f" width="24" height="24" />
              <a href="https://www.instagram.com/tabacaria_maktub/" target="_blank">
                <h1>/maktub.hookah</h1>
              </a>
            </li>
            <li>
              <Icon icon="dashicons:admin-site" color="#fec10f" width="24" height="24" />
              <a href="http://tabacariamaktub.com.br/" target="_blank">
                <h1>tabacariamaktub.com.br/</h1>
              </a>
            </li>
          </ul>
        </div>

        <div class="imgContact">
          <img src={Fotomaktub} alt="FOTO MAKTUB" />
        </div>

      </div>
    </section>
  )
}

export default Contact