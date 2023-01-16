import React from 'react'
import CV from '../../../../assets/pdf/AlexanderFlowersCV.pdf'

export default function CtaBtns() {
  return (
    <div className="cta-btns">
        <a href={CV}
           className='btn'
           target="_blank" 
           title='Скачать резюме'
           rel="noopener noreferrer">Резюме</a>
        <a href="#contacts-section"
           title='Перейти к контактам'
           className='btn btn-primary'>Контакты</a>
    </div>
  )
}
