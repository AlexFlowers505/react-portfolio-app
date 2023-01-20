import React from 'react'
import { FaTelegramPlane as TelegramIcon } from 'react-icons/fa'
import { BsGithub as GithubIcon } from 'react-icons/bs'
import { IoLogoBehance as BehanceIcon } from 'react-icons/io5'


export default function Footer() {
  return (
    <footer id='footer' className='footer'>
      <a className='logo-af-link logo-af-link--footer' title='В начало' href='#'><svg className='logo-af'><use href='#logo-af' /></svg></a>
      <ul className='footer__links-list'>
        <li className='footer__links-item'><a href='#' className='footer__the-link'>В начало</a></li>
        <li className='footer__links-item'><a href='#about-section' className='footer__the-link'>Обо мне</a></li>
        <li className='footer__links-item'><a href='#xp-section' className='footer__the-link'>Мой опыт</a></li>
        {/* <li className='footer__links-item'><a href='#services-section' className='footer__the-link'>Services</a></li> */}
        <li className='footer__links-item'><a href='#portfolio-section' className='footer__the-link'>Портфолио</a></li>
        <li className='footer__links-item'><a href='#testimonials-section' className='footer__the-link'>Отзывы</a></li>
        <li className='footer__links-item'><a href='#contacts-section' className='footer__the-link'>Контакты</a></li>
      </ul>
      <ul className="footer__socials-list footer__socials">
        <li className="footer__socials-item"><a className="footer__socials-the-link" href='https://t.me/AlexanderFlowers' target='_blank' rel='noopener noreferrer'><TelegramIcon /></a></li>
        <li className="footer__socials-item"><a className="footer__socials-the-link" href='https://github.com/AlexFlowers505' target='_blank' rel='noopener noreferrer'><GithubIcon /></a></li>
        <li className="footer__socials-item"><a className="footer__socials-the-link" href='https://www.behance.net/AlexanderFlowers' target='_blank' rel='noopener noreferrer'><BehanceIcon /></a></li>
      </ul>
    </footer>
  )
}
