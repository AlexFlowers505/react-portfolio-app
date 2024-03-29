import React from 'react'
import { BiCheck as CheckIcon } from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services-section' className='services-section' data-intersection='#services-section'>
      <h5>Что я предлагаю</h5>
      <h2>Мои услуги</h2>
      <div className="services-section__inner-wrapper tank">
        <article className="services-section__service-card service-card">
          <div className="service-card__heading-wrapper">
            <h3 className='service-card__heading'>UI/UX Разработка</h3>
          </div>
            <ul className='service-card__service-desc-list service-desc-list'>
              <li className='service-desc-list__service-desc-item service-desc-item'>
                <CheckIcon className='service-desc-item__icon' />
                <p className='service-desc-item__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
              </li>
            </ul>
        </article>
        <article className="services-section__service-card service-card">
          <div className="service-card__heading-wrapper">
            <h3 className='service-card__heading'>Верстка</h3>
          </div>
            <ul className='service-card__service-desc-list service-desc-list'>
              <li className='service-desc-list__service-desc-item service-desc-item'>
                <CheckIcon className='service-desc-item__icon' />
                <p className='service-desc-item__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
              </li>
            </ul>
        </article>
        <article className="services-section__service-card service-card">
          <div className="service-card__heading-wrapper">
            <h3 className='service-card__heading'>Фронтенд разработка</h3>
          </div>
            <ul className='service-card__service-desc-list service-desc-list'>
              <li className='service-desc-list__service-desc-item service-desc-item'>
                <CheckIcon className='service-desc-item__icon' />
                <p className='service-desc-item__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}
