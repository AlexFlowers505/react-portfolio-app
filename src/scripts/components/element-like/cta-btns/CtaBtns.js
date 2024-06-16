import React from 'react'
import CV from '../../../../assets/pdf/Цветков_Александр_Фронтенд_Разработка_UI_UX_дизайн.pdf'

export default function CtaBtns() {
  return (
    <div className="cta-btns">
        <a href='#about-section'
           className='btn btn-primary btn-with-icon'
           title='Обо мне'
           rel="noopener noreferrer">
            <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.49023 10.8325L10.5007 14.8118L14.5111 10.8325M10.5007 14.2589V6.18945" stroke="currentColor" strokeWidth="1.60417" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 0.875C5.1862 0.875 0.875 5.1862 0.875 10.5C0.875 15.8138 5.1862 20.125 10.5 20.125C15.8138 20.125 20.125 15.8138 20.125 10.5C20.125 5.1862 15.8138 0.875 10.5 0.875Z" stroke="currentColor" strokeWidth="1.60417" strokeMiterlimit="10"/>
            </svg>
            Больше обо мне</a>
        <a href={CV}
           className='btn'
           target="_blank" 
           title='Скачать резюме'
           rel="noopener noreferrer">Резюме</a>
        <a href="#contacts-section"
           title='Перейти к контактам'
           className='btn'>Контакты</a>
    </div>
  )
}
