/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React, {useState} from 'react'

/* =============================== Components =============================== */
import PortfolioItem from './insides/PortfolioItem'
/* =============================== Data =============================== */
import { portfolioData as data } from '../../../data/portfolio/portfolioData'

/* ============================================================== CODE ============================================================== */


export default function Portfolio() {
	// setting modal toggling
	return (
		<section id='portfolio-section' className='portfolio-section' data-intersection='#portfolio-section'>
			<h5 className='portfolio-section__preheading'>Мои работы</h5>
			<h2 className='portfolio-section__heading'>Портфолио</h2>
			<div className="tank portfolio-section__content-wrapper content-wrapper">
				{
					data.map(({ img, title, url, demoUrl }, i) => {
						return <PortfolioItem img={img} title={title} url={url} demoUrl={demoUrl} />
					})
				}
			</div>
		</section>
	)
}
