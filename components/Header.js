import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Web</span>News
            </h1>
            <p className={headerStyles.description}>Keep informed with Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nobis?</p>
        </div>
    )
}

export default Header
