import React from 'react'

import ContactItem from '../element-like/cta-btns/ContactItem'
import contacts from '../../data/contacts/contacts'

export default function ContactsList() {
  return (
    <div className='contacts-content__contacts-list'>
        {
            contacts.map((contact, i) => (
                <ContactItem
                    key={i}
                    name={contact.name}
                    link={contact.link}
                    icon={contact.icon}
                    text={contact.text}
                    contactVal={contact.contactVal}
                />
            ))
        }
    </div>
  )
}
