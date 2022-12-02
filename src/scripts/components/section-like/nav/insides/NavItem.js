import React from 'react'

export default function NavItem({id, icon, activeItem, setActiveItem}) {
    return (
        <a className={`main-nav__item${activeItem === id ? ' main-nav__item--active' : ''}`}
            href={id}
            onClick={ () => setActiveItem(id)}>{icon}</a>
    )
}
