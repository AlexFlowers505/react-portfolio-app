/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React from 'react'

/* =============================== Components =============================== */
import CtaBtns from '../../element-like/cta-btns/CtaBtns'
import HeaderSocials from './insides/HeaderSocials'

/* =============================== Files =============================== */
// import photo1 from '../../../../assets/img/pics/me-photos/photo1.png'
import photo1 from '../../../../assets/img/pics/me-photos/photo3.png'

/* ============================================================== CODE ============================================================== */

export default function Header() {
  return (
    <header className='header' data-intersection='#'>
      <div className='tank header__tank'>
        <div className="flex-col flex-center header__pitch">
          <a className='logo-af-link' href='#'><svg className='logo-af'><use href='#logo-af' /></svg></a>
          <div className="flex-col header__content">
            <div className="header__name-block flex-col">
              <h1>Цветков Александр</h1>
              <h5 className='text-light'>Фронтенд Разработчик & UX/UI Дизайнер</h5>
            </div>
            <div className="flex-col header__tagline">
              <p className='text-light'>Объединяю дизайн и разработку:</p>
              <p className='text-light'>от идеи до готового продукта</p>
            </div>
          <CtaBtns />
          </div>
        </div>
        <div className='photo-block'>
          <img src={photo1} alt='Alexander Flowers' className='photo-block__photo' />
        </div>
        <HeaderSocials />
        {/* <a className='header__scroll-down-btn scroll-down-btn' href='#contacts-section'>Вниз</a> */}
      </div>
    </header>
  )
}
