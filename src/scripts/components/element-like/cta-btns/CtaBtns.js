import React from 'react'
import CV from '../../../../assets/pdf/AlexanderFlowersCV.pdf'

export default function CtaBtns() {
  return (
    <div className="cta-btns">
        <a href={CV}
           className='btn'
           target="_blank" 
           rel="noopener noreferrer">Download CV</a>
        <a href="#Contacts-section"
           className='btn btn-primary'>Let's talk</a>
    </div>
  )
}
