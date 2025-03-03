import React from 'react'
import ProgressCircle from './insides/ProgressCircle'
import { BsPatchCheckFill as StarCheckIcon } from 'react-icons/bs'

export default function Xp() {
	return (
		<section id='xp-section' className='xp-section' data-intersection='#xp-section'>
			<h5>Подробнее о навыках</h5>
			<h2>Мой опыт</h2>
			<div className='tank xp-section__contents-wrapper'>
			<article className='xp-section__xp-card xp-card'>
					<h3 className='xp-card__heading'>Фронтенд разработка</h3>
					<div className='xp-card__contents '>
						<div className='xp-card__xp-item xp-item xp-item--js'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Vanilla JS</h4>
								<small className='xp-item__desc txt-light'>★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--react'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>React</h4>
								<small className='xp-item__desc txt-light'>★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--typescript'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>TypeScript</h4>
								<small className='xp-item__desc txt-light'>★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--wb'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>WebPack</h4>
								<small className='xp-item__desc txt-light'>★★</small>
							</div>
						</div>
					</div>
				</article>
				<article className='xp-section__xp-card xp-card'>
					<h3 className='xp-card__heading'>Верстка+</h3>
					<div className='xp-card__contents'>
						<div className='xp-card__xp-item xp-item xp-item--html'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>HTML</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--sass'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Sass</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--tailwind-css'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Tailwind CSS</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--bt'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Bootstrap</h4>
								<small className='xp-item__desc txt-light'>★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--bem'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>BEM</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
					</div>
				</article>
				<article className='xp-section__xp-card xp-card'>
					<h3 className='xp-card__heading'>UX/UI дизайн</h3>
					<div className='xp-card__contents'>
						<div className='xp-card__xp-item xp-item xp-item--ps'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Adobe Photoshop</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--ai'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Adobe Illustrator</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--fig'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Figma</h4>
								<small className='xp-item__desc txt-light'>★★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--ae'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Adobe After Effects</h4>
								<small className='xp-item__desc txt-light'>★★★★</small>
							</div>
						</div>
						<div className='xp-card__xp-item xp-item xp-item--pp'>
							<ProgressCircle />
							<div className='xp-item__data-wrapper'>
								<h4 className='xp-item__heading'>Adobe Premiere Pro</h4>
								<small className='xp-item__desc txt-light'>★★★</small>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
  )
}
