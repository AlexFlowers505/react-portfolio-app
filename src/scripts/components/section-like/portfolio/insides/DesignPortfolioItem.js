import React, {useState} from 'react'
import PreviewModal from './PreviewModal'

export default function DesignPortfolioItem({...props}) {
    const [isOpen, setIsOpen] = useState(false)
    const {img, title, url, demoUrl, i} = props
    return (
        <article className='content-wrapper__content-item content-item' key={i}>
            <div className='content-item__img-wrapper'>
                <img className='content-item__img' src={img} alt={title} />
            </div>
            <h3 className='content-item__heading'>{title}</h3>
            <div className="content-item__cta-wrapper">
                <a className='btn content-item__cta-btn' href={url} target='_blank' rel="noopener noreferrer">Behance</a>
                {/* <a className='btn btn-primary content-item__cta-btn' href={demoURL} target='_blank' rel="noopener noreferrer">Демо</a> */}
                {/* <button className='btn btn-primary content-item__cta-btn'
                        onClick={()=>setIsOpen(true)}
                        >Превью</button> */}
            </div>
            <PreviewModal open={isOpen} />
        </article>
    )
}
