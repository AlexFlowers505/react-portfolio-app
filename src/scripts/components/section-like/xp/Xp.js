import React from 'react'

import { BsPatchCheckFill as CheckIcon } from 'react-icons/bs'

export default function Xp() {
	return (
		<section id='xp-section' className='xp-section'>
			<h5>What skills I have</h5>
			<h2>My Experience</h2>
			<div className="tank xp-section__contents-wrapper experience__container">
				<article className="xp-section__xp-card xp-card experience__frontend">
					<h3 className='xp-card__heading'>Frontend Development</h3>
					<div className="xp-card__contents experience__content">
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>HTML</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>CSS</h4>
								<small className='xp-item__desc txt-light'>Intermediate</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>JavaScript</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Bootstrap</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Tailwind</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>React</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
					</div>
				</article>
				<article className="xp-section__xp-card xp-card experience__backend">
					<h3 className='xp-card__heading'>Backend Development</h3>
					<div className="xp-card__contents experience__content">
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Node JS</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>MongoDB</h4>
								<small className='xp-item__desc txt-light'>Intermediate</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>PHP</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>MySQL</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
						<div className="experience__details xp-card__xp-item xp-item">
							<CheckIcon className='xp-item__icon' />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Python</h4>
								<small className='xp-item__desc txt-light'>Experienced</small>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
  )
}
