import React, { useState, useRef, useContext } from 'react'
import emailjs from 'emailjs-com'
import { ModalContext } from '../element-like/modal/ModalContext'
import { emailJSCredentials } from '../../data/contacts/contacts'

export default function EmailJSform() {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)
  const { showModal } = useContext(ModalContext)

  const sendEmail = (evt) => {
    evt.preventDefault()
    setIsSending(true)

    emailjs.sendForm(
		emailJSCredentials.serviceID,
		emailJSCredentials.templateID,
		form.current,
		emailJSCredentials.key
    )
    .then(
      (response) => {
        setIsSending(false)
        showModal('success')
        evt.target.reset()
      },
      (err) => {
        setIsSending(false)
        showModal('error')

        console.log('Ошибка:', err)
      }
    )

  }

  return (
    <div>
      <form className='contacts-content__message-form message-form' ref={form} onSubmit={sendEmail}>
        <input className='message-form__field message-form--author-name' type="text" name="name" placeholder='Ваше имя' required />
        <input className='message-form__field message-form--author-email' type="email" name='email' placeholder='Ваша почта' required />
        <textarea className='message-form__field message-form--the-message' name="message" rows="7" placeholder='Ваше сообщение' required></textarea>
        <button className='message-form__submit-btn btn btn-primary' type='submit'>
          {isSending ? 'Отправляю...' : 'Отправить'}
        </button>
      </form>
    </div>
  )
}