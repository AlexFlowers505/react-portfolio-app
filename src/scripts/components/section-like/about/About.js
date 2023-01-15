import React from 'react'
import myPhoto from '../../../../assets/img/pics/me-photos/photo2.jpg'
import { FaAward as AwardIcon } from 'react-icons/fa'
import { FiUsers as UsersIcon } from 'react-icons/fi'
import { VscFolderLibrary as DirIcon } from 'react-icons/vsc'


export default function About() {
  return (
    <section id='about-section' className='about-section' data-intersection='#about-section'>
      <h5>Get to know</h5>
      <h2>About me</h2>
			<div className='tank about-section__contents-wrapper'>
        <div className='about-section__img-outer-wrapper'>
          <div className='about-section__img-inner-wrapper'>
            <img className='about-section__img' src={myPhoto} alt="Alexander" />
          </div>
        </div>
        <div className="about-section__text-content text-content">
          <div className="text-content__cards">
            <article className="text-content__about-card about-card">
              <AwardIcon className='about-card__icon' />
              <h5 className='about-card__heading'>Eperience</h5>
              <small className='about-card__desc'>3+ Years Working</small>
            </article>
            <article className="text-content__about-card about-card">
              <UsersIcon className='about-card__icon' />
              <h5 className='about-card__heading'>Clients</h5>
              <small className='about-card__desc'>200+ Worldwide</small>
            </article>
            <article className="text-content__about-card about-card">
              <DirIcon className='about-card__icon' />
              <h5 className='about-card__heading'>Projects</h5>
              <small className='about-card__desc'>80+ Completed</small>
            </article>
          </div>
					<p className='text-content__about-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aspernatur eveniet a reprehenderit nam ullam quia assumenda asperiores quaerat? Voluptatibus repellendus facilis temporibus quae dolorum quam earum maxime magni nesciunt.</p>
          <a className='text-content__contact-cta btn btn-primary' href="#contacts-section">Let's talk</a>
        </div>
      </div>
    </section>
  )
}
