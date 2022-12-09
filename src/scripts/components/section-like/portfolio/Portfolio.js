import React from 'react'
import IMG1 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio1.jpg'
import IMG2 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio2.jpg'
import IMG3 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio3.jpg'
import IMG4 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio4.jpg'
import IMG5 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio5.png'
import IMG6 from '../../../../assets/img/pics/portfolio-previews/dev/portfolio6.jpg'

const data = [
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
	{
		img: IMG1,
		title: 'Crypto Currency Dashboard & Financial Visualization',
		githubURL: 'https://github.com',
		demoURL: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
	},
]

export default function Portfolio() {
	return (
		<section id='portfolio-section' className='portfolio-section'>
			<h5 className='portfolio-section__preheading'>My Recent Work</h5>
			<h2 className='portfolio-section__heading'>Portfolio</h2>
			<div className="tank portfolio-section__content-wrapper content-wrapper">
				{
					data.map(({ img, title, githubURL, demoURL }, i) => {
						return (
							<article className='content-wrapper__content-item content-item' key={i}>
								<div className='content-item__img-wrapper'>
									<img className='content-item__img' src={img} alt={title} />
								</div>
								<h3 className='content-item__heading'>{title}</h3>
								<div className="content-item__cta-wrapper">
									<a className='btn content-item__cta-btn' href={githubURL} target='_blank' rel="noopener noreferrer">Github</a>
									<a className='btn btn-primary content-item__cta-btn' href={demoURL} target='_blank' rel="noopener noreferrer">Live Demo</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}
