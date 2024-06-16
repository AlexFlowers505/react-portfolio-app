/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React, {useState, useEffect} from 'react'

/* =============================== Components =============================== */
import DesignPortfolioItem from './insides/DesignPortfolioItem'
import DevPortfolioItem from './insides/DevPortfolioItem'
/* =============================== Data =============================== */
import { designPortfolioData as DesignData } from '../../../data/portfolio/designPortfolioData'
import { devPortfolioData as DevData } from '../../../data/portfolio/devPortfolioData'

/* ============================================================== CODE ============================================================== */


export default function Portfolio() {
	const [toggler, setToggler] = useState('design')
	const handleClick = (evt, state) => {
		setToggler(state)
		evt.target.blur()
	}
	return (
		<section id='portfolio-section' className='portfolio-section' data-intersection='#portfolio-section'>
			<h5 className='portfolio-section__preheading'>Мои работы</h5>
			<h2 className='portfolio-section__heading'>Портфолио</h2>
			<div className="portfolio-section__toggler toggler">
				<button className={`btn btn-primary toggler__item ${toggler === 'design' ? 'toggler__item--active' : ''}`}
						onClick={ (evt) => handleClick(evt, 'design') }
						>Дизайн</button>
				<button className={`btn btn-primary toggler__item ${toggler === 'dev' ? 'toggler__item--active' : ''}`}
						onClick={ (evt) => handleClick(evt, 'dev') }
						>Фронтенд</button>
			</div>
			<div className="tank portfolio-section__content-wrapper content-wrapper">
				{ 
					toggler === 'design' ? DesignData.map(({ img, title, url, demoUrl }, i) => {
						return <DesignPortfolioItem img={img} title={title} url={url} demoUrl={demoUrl} key={i} />
					})
					: toggler === 'dev' ? DevData.map(({ img, title, url, demoUrl }, i) => {
						return <DevPortfolioItem img={img} title={title} url={url} demoUrl={demoUrl} key={i} />
					})
					: null
				}
			{/* <a className='btn btn-primary content-item__cta-btn' href="https://www.behance.net/AlexanderFlowers" target='_blank' rel="noopener noreferrer">Больше моих работ на Behance</a> */}
			</div>
			<div className="portfolio-section__toggler portfolio-section__toggler--secondary toggler">
				{ toggler === 'dev' ? 
					<a className={`btn btn-primary toggler__item ${toggler === 'design' ? 'toggler__item--active' : ''}`}
						href="#portfolio-section" 
						onClick={ (evt) => handleClick(evt, 'design') }
					>
						<span>Дизайн</span>
						<svg className='toggler__item-icon'><use href='#arrow-up'/></svg>
					</a>
				: toggler === 'design' ?
					<a className={`btn btn-primary toggler__item ${toggler === 'dev' ? 'toggler__item--active' : ''}`}
						href="#portfolio-section" 
						onClick={ (evt) => handleClick(evt, 'dev') }
					>
						<span>Фронтенд</span>
						<svg className='toggler__item-icon'><use href='#arrow-up'/></svg>
					</a>
				: null }
			</div>
		</section>
	)
}
