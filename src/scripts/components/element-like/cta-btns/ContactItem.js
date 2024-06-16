import React from 'react'

export default function ContactItem({ name, link, icon: Icon, contactVal=false, text = 'Написать' }) {
  return (
    <a className='contacts-content__contacts-item contacts-item' href={link} target='_blank' rel='noopener noreferrer'>
      <Icon className='contacts-item__icon' />
      <h4 className='contacts-item__heading'>{name}</h4>
      { contactVal && <h5 className='contacts-item__val'>{contactVal}</h5> }
      <span className='contacts-item__cta-btn'>{text}</span>
    </a>
  )
}