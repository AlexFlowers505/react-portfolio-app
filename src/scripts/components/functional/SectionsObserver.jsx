import React from 'react'

export default function SectionsObserver () {
    // sections' dataset.intersection contains the same value as the related navLinks' hrefs' values
    window.setTimeout(()=> {
        const intersectionSections = document.querySelectorAll('[data-intersection]')
        const mainNavItems = document.querySelectorAll('.main-nav__item')
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach( section => {
                    if (section.isIntersecting) mainNavItems.forEach( item => item.classList.toggle('main-nav__item--active', item.getAttribute('href') === section.target.dataset.intersection))
                })
            }, { threshold: .7 }
        )
        intersectionSections.forEach( section => {
            observer.observe(section)
        })
    }, 1000)
}
