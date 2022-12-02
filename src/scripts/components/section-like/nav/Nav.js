/* ============================================================== IMPORTS ============================================================== */
/* =============================== Modules =============================== */
import React from 'react'
/* =============================== Hooks =============================== */
import { useState } from 'react'
/* =============================== Components =============================== */
/* ============== insides ============== */
import NavItem from './insides/NavItem'
/* ============== icons ============== */
import { AiOutlineHome as HomeIcon, AiOutlineUser as UserIcon } from 'react-icons/ai'
import { BiBook as BookIcon, BiMessageSquareDetail as ChatIcon } from 'react-icons/bi'
import { RiServiceLine as HeartShakeIcon } from 'react-icons/ri'

export default function Nav() {
  const [activeItem, setActiveItem] = useState('')

  return (
    <nav className='main-nav'>
      <NavItem id='#' icon={<HomeIcon />} activeToggler={setActiveItem} activeIndicator={activeItem}/>
      <NavItem id='#about-section' icon={<BookIcon />} activeToggler={setActiveItem} activeIndicator={activeItem}/>
      <NavItem id='#xp-section' icon={<UserIcon />} activeToggler={setActiveItem} activeIndicator={activeItem}/>
      <NavItem id='#services-section' icon={<HeartShakeIcon />} activeToggler={setActiveItem} activeIndicator={activeItem}/>
      <NavItem id='#contacts-section' icon={<ChatIcon />} activeToggler={setActiveItem} activeIndicator={activeItem}/>
    </nav>
  )
}
