/* ============================================================== IMPORTS ============================================================== */
/* =============================== Modules =============================== */
import React from 'react'
/* =============================== Hooks =============================== */
import { useState } from 'react'
/* =============================== Components =============================== */
/* ============== icons ============== */
import { AiOutlineHome as HomeIcon, AiOutlineUser as UserIcon } from 'react-icons/ai'
import { BiBook as BookIcon, BiMessageSquareDetail as ChatIcon } from 'react-icons/bi'
import { RiServiceLine as HeartShakeIcon } from 'react-icons/ri'

export default function Nav() {
  const [activeItem, setActiveItem] = useState('')

  return (
    <nav className='main-nav'>
      <a href='#'
         className={`main-nav__item${activeItem === '#' ? ' main-nav__item--active' : ''}`}
         onClick={ () => setActiveItem('#')}><HomeIcon />
      </a>
      <a href='#about-section'
         className={`main-nav__item${activeItem === '#about-section' ? ' main-nav__item--active' : ''}`}
         onClick={ () => setActiveItem('#about-section')}><BookIcon />
      </a>
      <a href='#xp-section'
         className={`main-nav__item${activeItem === '#xp-section' ? ' main-nav__item--active' : ''}`}
         onClick={ () => setActiveItem('#xp-section')}><UserIcon />
      </a>
      <a href='#services-section'
         className={`main-nav__item${activeItem === '#services-section' ? ' main-nav__item--active' : ''}`}
         onClick={ () => setActiveItem('#services-section')}><HeartShakeIcon />
      </a>
      <a href='#contacts-section'
         className={`main-nav__item${activeItem === '#contacts-section' ? ' main-nav__item--active' : ''}`}
         onClick={ () => setActiveItem('#contacts-section')}><ChatIcon />
      </a>
    </nav>
  )
}
