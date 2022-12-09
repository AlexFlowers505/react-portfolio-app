import React from 'react'
import { testimonialsData as data } from '../../../data/testimonials/testimonialsData'

export default function Testimonials() {
	return (
		<section id='testimonials-section' className='testimonials-section'>
			<h5 className='testimonials-section__preheading'>Review from clients</h5>
			<h2 className='testimonials-section__heading'>Testimonals</h2>
			<div className="tank testimonials-section__contents-wrapper contents-wrapper">
				{data.map(({avatar, name, review}, i) => {
					return (
						<article className='contents-wrapper__review review' key={i}>
							<div className='review__author-pic-wrapper'>
								<img className='review__author-pic' src={avatar} alt={name} />
							</div>
							<h5 className='review__author-name'>Ernest Achiever</h5>
							<small className='review__the-review'>{review}</small>
						</article>
					)
				})}
			</div>
		</section>
	)
}
