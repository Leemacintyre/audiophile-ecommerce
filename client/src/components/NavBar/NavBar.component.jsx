import React from 'react'
import './NavBar.styles.scss'
import { ReactComponent as LogoIcon } from '../../assets/crown.svg'

// // TODO: cart will need its own component WITH ICON

export const NavBar = () => {
    return (
        <div className="NavBar-container">
            <div className="NavBar-logo"><LogoIcon /></div>
            <div className="NavBar-nav">
                <div className="NavBar-link">SHOP </div>
                <div className="NavBar-link">SHOP </div>
                <div className="NavBar-link">SHOP </div>
                <div className="NavBar-link">CART </div>
            </div>
        </div>
    )
}
