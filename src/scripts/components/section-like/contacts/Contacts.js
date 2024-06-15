import React, { useRef } from 'react'

import { MdOutlineEmail as EmailIcon } from 'react-icons/md'
import { BsWhatsapp as WhatsappIcon} from 'react-icons/bs'
import { BsTelegram as TelegramIcon } from 'react-icons/bs'

import emailjs from 'emailjs-com'

export default function Contacts() {
	const form = useRef()
	const sendEmail = evt => {
		evt.preventDefault()
		emailjs.sendForm('service_21wtjkb', 'template_g2e7kfw', form.current, 'icMWhDpKzSX4k5XJ_')
		evt.target.reset()
	}
  return (
    <section id='contacts-section' className='contacts-section' data-intersection='#contacts-section'>
      <h5 className='contacts-section__preheading'>Связаться со мной</h5>
      <h2 className='contacts-section__heading'>Контакты</h2>
      <div className='tank contacts-section__contacts-content contacts-content'>
			<div className='contacts-content__contacts-list'>
				<article className=' contacts-content__contacts-item contacts-item'>
					<TelegramIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>Telegram</h4>
					<a className='contacts-item__cta-btn' href='https://t.me/AlexanderFlowers' target='_black' rel='noopener' >Написать</a>
				</article>
				<article className='contacts-content__contacts-item contacts-item'>
					<WhatsappIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>WhatsApp</h4>
					<a className='contacts-item__cta-btn' href='https://api.whatsapp.com/send?phone=+23342234234' target='_black' rel='noopener' >Написать</a>
				</article>
				<article className='contacts-content__contacts-item contacts-item'>
					<EmailIcon className='contacts-item__icon' />
					<h4 className='contacts-item__heading'>Email</h4>
					<h5 className='contacts-item__val'>allnewalex@yandex.com</h5>
					<a className='contacts-item__cta-btn' href='mailto:allnewalex@yandex.com' target='_black' rel='noopener' >Написать</a>
				</article>
			</div>
			<form className='contacts-content__message-form message-form' ref={form} onSubmit={sendEmail}>
				<input className='message-form__field message-form--author-name' type="text" name="name" id="" placeholder='Ваше имя' required />
				<input className='message-form__field message-form--autho-email' type="email" name='email' placeholder='Ваша почта' required />
				<textarea className='message-form__field message-form--the-message' name="message" id="" rows="7" placeholder='Ваше сообщение' required></textarea>
				<button className='message-form__submit-btn btn btn-primary' type='submit'>Отправить</button>
			</form>
      </div>
    </section>
  )
}
