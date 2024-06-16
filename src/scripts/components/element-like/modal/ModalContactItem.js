import React from 'react'

export default function ContactItem({ name, link, icon: Icon, contactVal=false }) {
  return (
    <a className="modal-socials__item" href={link} target="_blank" rel="noopener noreferrer">
        <Icon className='modal-socials__icon' />
        <h4 className='modal-socials__name'>{name}</h4>
    </a>
  )
}