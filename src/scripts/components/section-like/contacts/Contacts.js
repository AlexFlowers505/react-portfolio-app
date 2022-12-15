import React from 'react'

import { MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { RiMessengerLine as FBIcon} from 'react-icons/ri'
import { BsWhatsapp as WhatsappIcon} from 'react-icons/bs'

export default function Contacts() {
  return (
    <section id='contacts-section' className='contacts-section'>
      <h5 className='contacts-section__preheading'>Get In Touch</h5>
      <h2 className='contacts-section__heading'>Contact Me</h2>
      <div className='tank contact__container contacts-section__contacts-content contacts-content'>
			<div className='contact__options contacts-content__contacts-list'>
				<article className='contact__option contacts-content__contacts-item contacts-item'>
					<EmailIcon className='contact__option-icon contacts-item__icon' />
					<h4 className='contacts-item__heading'>Email</h4>
					<h5 className='contacts-item__val'>someEmail@gmail.com</h5>
					<a className='contacts-item__cta-btn' href='mailto:someEmail@gmail.com' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className='contact__option contacts-content__option-item'>
					<FBIcon className='contact__option-icon' />
					<h4 className='contacts-item__heading'>Messenger</h4>
					<h5 className='contacts-item__val'>someTelegram</h5>
					<a className='contacts-item__cta-btn' href='https://m.me/ernest.achiever' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className='contact__option contacts-content__option-item'>
					<WhatsappIcon className='contact__option-icon' />
					<h4 className='contacts-item__heading'>WhatsApp</h4>
					<h5 className='contacts-item__val'>someEmail@gmail.com</h5>
					<a className='contacts-item__cta-btn' href='https://api.whatsapp.com/send?phone=+23342234234' target='_black' rel='noopener' >Send a message</a>
				</article>
			</div>
			<form className='contacts-content__message-form message-form' action=''>
				<input className='message-form__field message-form--author-name' type="text" name="name" id="" placeholder='Your Full Name' required />
				<input className='message-form__field message-form--autho-email' type="email" name='email' placeholder='Your Email' required />
				<textarea className='message-form__field message-form--the-message' name="message" id="" rows="7" placeholder='Your Message' required></textarea>
				<button className='message-form__submit-btn btn btn-primary' type='submit'>Send Message</button>
			</form>
      </div>
    </section>
  )
}
