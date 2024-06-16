import React from 'react'

import ModalContactItem from './ModalContactItem'
import contacts from '../../../data/contacts/contacts'

export default function ContactsList() {
  return (
    <div className='modal-socials'>
        {
            contacts.map( (contact, i) => (
                <ModalContactItem
                    key={i}
                    name={contact.name}
                    link={contact.link}
                    icon={contact.icon}
                    contactVal={contact.contactVal}
                />
            ))
        }
    </div>
  )
}
