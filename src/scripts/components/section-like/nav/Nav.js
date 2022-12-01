/* ============================================================== IMPORTS ============================================================== */
/* =============================== Modules =============================== */
import React from 'react'
/* =============================== Components =============================== */
/* ============== icons ============== */
import { AiOutlineHome as HomeIcon, AiOutlineUser as UserIcon } from 'react-icons/ai'
import { BiBook as BookIcon, BiMessageSquareDetail as ChatIcon } from 'react-icons/bi'
import { RiServiceLine as HeartShakeIcon } from 'react-icons/ri'

export default function Nav() {
  return (
    <nav className='main-nav'>
      <a className='main-nav__item' href='#'><HomeIcon /></a>
      <a className='main-nav__item' href='#about-section'><BookIcon /></a>
      <a className='main-nav__item' href='#xp-section'><UserIcon /></a>
      <a className='main-nav__item' href='#services-section'><HeartShakeIcon /></a>
      <a className='main-nav__item' href='#contacts-section'><ChatIcon /></a>
    </nav>
  )
}
