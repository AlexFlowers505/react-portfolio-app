import React from 'react'

import { MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { RiMessengerLine as FBIcon} from 'react-icons/ri'
import { BsWhatsapp as WhatsappIcon} from 'react-icons/bs'

export default function Contacts() {
  return (
    <section id='contacts-section' className='contacts-section'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='tank contact__container'>
			<div className='contact__options'>
				<article className='contact__option'>
					<EmailIcon />
					<h4>Email</h4>
					<h5>someEmail@gmail.com</h5>
					<a href='mailto:someEmail@gmail.com' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className='contact__option'>
					<FBIcon />
					<h4>Messenger</h4>
					<h5>someTelegram</h5>
					<a href='https://m.me/ernest.achiever' target='_black' rel='noopener' >Send a message</a>
				</article>
				<article className='contact__option'>
					<WhatsappIcon />
					<h4>WhatsApp</h4>
					<h5>someEmail@gmail.com</h5>
					<a href='https://api.whatsapp.com/send?phone=+23342234234' target='_black' rel='noopener' >Send a message</a>
				</article>
			</div>
			<form action=''>
				<input type="text" name="name" id="" placeholder='Your Full Name' required />
				<input type="email" name='email' placeholder='Your Email' required />
				<textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
				<button type='submit' className='btn btn-primary'>Send Message</button>
			</form>
      </div>
    </section>
  )
}
