/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React, {useState} from 'react'

/* =============================== Components =============================== */
import PortfolioItem from './insides/PortfolioItem'
/* =============================== Data =============================== */
import { designPortfolioData as DesignData } from '../../../data/portfolio/designPortfolioData'
import { devPortfolioData as DevData } from '../../../data/portfolio/devPortfolioData'

/* ============================================================== CODE ============================================================== */


export default function Portfolio() {
	// setting modal toggling
	return (
		<section id='portfolio-section' className='portfolio-section' data-intersection='#portfolio-section'>
			<h5 className='portfolio-section__preheading'>Мои работы</h5>
			<h2 className='portfolio-section__heading'>Портфолио</h2>
			<div className="tank portfolio-section__content-wrapper content-wrapper">
				{
					DesignData.map(({ img, title, url, demoUrl }, i) => {
						return <PortfolioItem img={img} title={title} url={url} demoUrl={demoUrl} />
					})
				}
								{
					DevData.map(({ img, title, url, demoUrl }, i) => {
						return <PortfolioItem img={img} title={title} url={url} demoUrl={demoUrl} />
					})
				}
				<a className='btn btn-primary content-item__cta-btn' href="https://www.behance.net/AlexanderFlowers" target='_blank' rel="noopener noreferrer">Больше моих работ на Behance</a>
			</div>
		</section>
	)
}
