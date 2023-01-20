import React from 'react'
import { testimonialsData as data } from '../../../data/testimonials/testimonialsData'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


export default function Testimonials() {
	return (
		<section id='testimonials-section' className='testimonials-section' data-intersection='#testimonials-section'>
			{/* <h5 className='testimonials-section__preheading'>Review from clients</h5> */}
			<h2 className='testimonials-section__heading'>Отзывы</h2>
			<Swiper 
				className="tank testimonials-section__contents-wrapper contents-wrapper"
				modules={[ Pagination ]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
				navigation
			>
				{data.map(({avatar, name, review}, i) => {
					return (
						<SwiperSlide className='contents-wrapper__review review' key={i}>
							<div className='review__author-pic-wrapper'>
								<img className='review__author-pic' src={avatar} alt={name} />
							</div>
							<h5 className='review__author-name'>{name}</h5>
							<small className='review__the-review'>{review}</small>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}
