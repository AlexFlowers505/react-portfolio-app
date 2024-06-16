
import React from 'react'

import EmailJSform from '../../element-like/EmailJSform'
import ContactsList from '../../element-like/ContactsList'

export default function Contacts() {
  return (
    <section id='contacts-section' className='contacts-section' data-intersection='#contacts-section'>
      <h5 className='contacts-section__preheading'>Связаться со мной</h5>
      <h2 className='contacts-section__heading'>Контакты</h2>
      <div className='tank contacts-section__contacts-content contacts-content'>
			<ContactsList />
			<EmailJSform />
      </div>
    </section>
  )
}
