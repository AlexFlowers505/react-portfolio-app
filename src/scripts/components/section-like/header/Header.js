/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React from 'react'

/* =============================== Components =============================== */
import CtaBtns from '../../element-like/cta-btns/CtaBtns'
import HeaderSocials from './insides/HeaderSocials'

/* =============================== Files =============================== */
import photo1 from '../../../../assets/img/pics/photo1.jpg'

/* ============================================================== CODE ============================================================== */

export default function Header() {
  return (
    <header className='header'>
      <div className="tank header__tank">
        <h5>Hello, I'm</h5>
        <h1>Alexander Flowers</h1>
        <h5 className='text-light'>Frontend Developer & Designer</h5>
        <CtaBtns />
        <HeaderSocials />

        <div className="photo-block">
          <img src={photo1} alt="Alexander Flowers" className="photo-block__photo" />
        </div>
        <a className='scroll__down' href='#contacts-section'>Scroll down</a>
      </div>
    </header>
  )
}
