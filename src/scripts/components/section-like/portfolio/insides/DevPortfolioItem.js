import React, {useState} from 'react'
// import PreviewModal from './PreviewModal'

export default function DevPortfolioItem({...props}) {
    const [isOpen, setIsOpen] = useState(false)
    const {img, title, url, demoUrl, i} = props
    return (
        <article className='content-wrapper__content-item content-item' key={i}>
            <div className='content-item__img-wrapper'>
                <img className='content-item__img' src={img} alt={title} />
            </div>
            <h3 className='content-item__heading'>{title}</h3>
            <div className="content-item__cta-wrapper">
                <a className='btn content-item__cta-btn' href={url} target='_blank' rel="noopener noreferrer">GitHub</a>
                { demoUrl ? <a className='btn btn-primary content-item__cta-btn' href={demoUrl} target='_blank' rel="noopener noreferrer">Демо</a> : null }
            </div>
            {/* <PreviewModal open={isOpen} /> */}
        </article>
    )
}
