import React from 'react'
import './hamburger.css'

const Hamburger = () => {

    const handleClick = () => {
        const sidebar = document.querySelector('#sidebar')
        sidebar.classList.toggle('active')
        document.querySelector('.hamburger-lines').classList.toggle('active')
    }

    return (
        <div className="hamburger" onClick={handleClick}>
            <div className="hamburger-lines"></div>
        </div>
    )
}

export default Hamburger
