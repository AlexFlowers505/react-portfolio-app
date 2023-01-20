import React from 'react'
import { RiMessengerLine as FBIcon} from 'react-icons/ri'
import { FiInstagram as InstaIcon} from 'react-icons/fi'
import { IoLogoTwitter as TwitterIcon} from 'react-icons/io'

export default function Footer() {
  return (
    <footer id='footer' className='footer'>
      <a className='logo-af-link logo-af-link--footer' title='В начало' href='#'><svg className='logo-af'><use href='#logo-af' /></svg></a>
      <ul className='footer__links-list'>
        <li className='footer__links-item'><a href='#' className='footer__the-link'>Home</a></li>
        <li className='footer__links-item'><a href='#about-section' className='footer__the-link'>About</a></li>
        <li className='footer__links-item'><a href='#xp-section' className='footer__the-link'>Experience</a></li>
        <li className='footer__links-item'><a href='#services-section' className='footer__the-link'>Services</a></li>
        <li className='footer__links-item'><a href='#portfolio-section' className='footer__the-link'>Portfolio</a></li>
        <li className='footer__links-item'><a href='#testimonials-section' className='footer__the-link'>Testimonials</a></li>
        <li className='footer__links-item'><a href='#contacts-section' className='footer__the-link'>Contacts</a></li>
      </ul>
      <ul className="footer__socials-list footer__socials">
        <li className="footer__socials-item"><a href="" className="footer__socials-the-link"><InstaIcon /></a></li>
        <li className="footer__socials-item"><a href="" className="footer__socials-the-link"><FBIcon /></a></li>
        <li className="footer__socials-item"><a href="" className="footer__socials-the-link"><TwitterIcon /></a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}
