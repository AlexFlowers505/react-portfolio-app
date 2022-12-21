import React, { useRef } from 'react'

import { MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { RiMessengerLine as FBIcon} from 'react-icons/ri'
import { BsWhatsapp as WhatsappIcon} from 'react-icons/bs'

import emailjs from 'emailjs-com'

export default function Contacts() {
	const form = useRef()
	const sendEmail = evt => {
		evt.preventDefault()
		emailjs.sendForm('service_21wtjkb', 'template_g2e7kfw', form.current, 'icMWhDpKzSX4k5XJ_')
		evt.target.reset()
	}
  return (
    <section id='contacts-section' className='contacts-section'>
      <h5 className='contacts-section__preheading'>Get In Touch</h5>
      <h2 className='contacts-section__heading'>Contact Me</h2>
      <div className='tank contacts-section__contacts-content contacts-content'>
			<div className='contacts-content__contacts-list'>
				<article className='contacts-content__contacts-item contacts-item'>
					<EmailIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>Email</h4>
					<h5 className='contacts-item__val'>someEmail@gmail.com</h5>
					<a className='contacts-item__cta-btn' href='mailto:someEmail@gmail.com' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className=' contacts-content__contacts-item contacts-item'>
					<FBIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>Messenger</h4>
					<h5 className='contacts-item__val'>someTelegram</h5>
					<a className='contacts-item__cta-btn' href='https://m.me/ernest.achiever' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className='contacts-content__contacts-item contacts-item'>
					<WhatsappIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>WhatsApp</h4>
					<h5 className='contacts-item__val'>someEmail@gmail.com</h5>
					<a className='contacts-item__cta-btn' href='https://api.whatsapp.com/send?phone=+23342234234' target='_black' rel='noopener' >Send a message</a>
				</article>
			</div>
			<form className='contacts-content__message-form message-form' ref={form} onSubmit={sendEmail}>
				<input className='message-form__field message-form--author-name' type="text" name="name" id="" placeholder='Your Full Name' required />
				<input className='message-form__field message-form--autho-email' type="email" name='email' placeholder='Your Email' required />
				<textarea className='message-form__field message-form--the-message' name="message" id="" rows="7" placeholder='Your Message' required></textarea>
				<button className='message-form__submit-btn btn btn-primary' type='submit'>Send Message</button>
			</form>
      </div>
    </section>
  )
}
