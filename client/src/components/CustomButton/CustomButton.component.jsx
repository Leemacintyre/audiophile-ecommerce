import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, close, inverted, ...props }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} ${close ? 'close' : ''} custom-button`}  {...props}>
            {children}
        </button>
    )
}

export default CustomButton

