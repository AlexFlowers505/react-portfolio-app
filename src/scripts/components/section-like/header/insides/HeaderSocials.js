/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React from 'react'

/* =============================== Components =============================== */

/* ============== icons ============== */
import { BsTelegram as TelegramIcon, BsGithub as GithubIcon } from 'react-icons/bs'
import { IoLogoBehance as BehanceIcon } from 'react-icons/io5'

/* ============================================================== CODE ============================================================== */
export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://t.me/AlexanderFlowers' target='_blank' rel='noopener noreferrer'><TelegramIcon /></a>
        <a href='https://www.behance.net/AlexanderFlowers' target='_blank' rel='noopener noreferrer'><BehanceIcon /></a>
        <a href='https://github.com/AlexFlowers505' target='_blank' rel='noopener noreferrer'><GithubIcon /></a>
    </div>
  )
}
