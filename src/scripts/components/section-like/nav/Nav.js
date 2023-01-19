/* ============================================================== IMPORTS ============================================================== */
/* =============================== Modules =============================== */
import React from 'react'
/* =============================== Hooks =============================== */
import { useState } from 'react'
/* =============================== Components =============================== */
/* ============== icons ============== */
import { AiOutlineHome as HomeIcon, 
         AiOutlineUser as UserIcon, 
         AiOutlineLineChart as GrowthIcon, 
         AiOutlineGift as ServiceIcon 
         } from 'react-icons/ai'
import { IoCheckmarkDoneSharp as DoubleCheckIcon } from 'react-icons/io5'
import { TiMessages as MessagesIcon } from 'react-icons/ti'
import { BsBriefcase as CaseIcon } from 'react-icons/bs'

export default function Nav() {
  const [activeItem, setActiveItem] = useState('')

  return (
    <nav className='main-nav'>
      <a href='#'
         title='Home'
         className={`main-nav__item${activeItem === '#' ? ' main-nav__item--active' : ''} main-nav__item--home`}
         onClick={ () => setActiveItem('#')}><HomeIcon />
      </a>
      <a href='#about-section'
         title='About me'
         className={`main-nav__item${activeItem === '#about-section' ? ' main-nav__item--active' : '' } main-nav__item--about`}
         onClick={ () => setActiveItem('#about-section')}><UserIcon />
      </a>
      <a href='#xp-section'
         title='Experience'
         className={`main-nav__item${activeItem === '#xp-section' ? ' main-nav__item--active' : ''} main-nav__item--xp`}
         onClick={ () => setActiveItem('#xp-section')}><GrowthIcon />
      </a>
      {/* <a href='#services-section'
         title='Services'
         className={`main-nav__item${activeItem === '#services-section' ? ' main-nav__item--active' : ''} main-nav__item--services`}
         onClick={ () => setActiveItem('#services-section')}><ServiceIcon />
      </a> */}
      <a href='#portfolio-section'
         title='Portfolio'
         className={`main-nav__item${activeItem === '#services-section' ? ' main-nav__item--active' : ''} main-nav__item--portfolio`}
         onClick={ () => setActiveItem('#portfolio-section')}><CaseIcon />
      </a>
      {/* <a href='#testimonials-section'
         title='Testimonials'
         className={`main-nav__item${activeItem === '#services-section' ? ' main-nav__item--active' : ''} main-nav__item--testimonials`}
         onClick={ () => setActiveItem('#testimonials-section')}><DoubleCheckIcon />
      </a> */}
      <a href='#contacts-section'
         title='Contact me'
         className={`main-nav__item${activeItem === '#contacts-section' ? ' main-nav__item--active' : ''} main-nav__item--contacts`}
         onClick={ () => setActiveItem('#contacts-section')}><MessagesIcon />
      </a>
    </nav>
  )
}
