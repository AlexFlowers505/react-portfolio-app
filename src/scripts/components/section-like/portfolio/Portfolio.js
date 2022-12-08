import React from 'react'
import IMG1 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio1.jpg'
import IMG2 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio2.jpg'
import IMG3 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio3.jpg'
import IMG4 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio4.jpg'
import IMG5 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio5.png'
import IMG6 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio6.jpg'

export default function Portfolio() {
	return (
		<section id='portfolio-section' className='portfolio-section'>
			<h5 className='portfolio-section__preheading'>My Recent Work</h5>
			<h2 className='portfolio-section__heading'>Portfolio</h2>
			<div className="tank portfolio__container portfolio-section__content-wrapper content-wrapper">
				<article className='portfolio__item content-wrapper__content-item content-item'>
					<div className="portfolio__item-image content-item__img-wrapper">
						<img className='content-item__img' src={IMG1} alt="" />
					</div>
					<h3 className='content-item__heading'>This is a portfolio item title</h3>
					<a className='btn content-item__btn' href="https://github.com">Github</a>
					<a className='btn btn-primary content-item__btn' href="https://dribbble.com/shots/19771230-Sidebar-navigation-Untitled-UI" target='_blank' rel="noopener noreferrer">Live Demo</a>
				</article>
			</div>
		</section>
	)
}
