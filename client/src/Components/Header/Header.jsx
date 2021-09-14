import React from 'react'
import { Link } from 'react-router-dom'
import { Hamburger } from '..'
import logo from '../../Assets/Images/blood.svg'
import './header.css'



const Header = () => {



    return (
        <header className="container header"   >
            <Hamburger />
            <Link to="/">
                <img src={logo} alt="Brand Logo" />
                <h1>DONATE</h1>
            </Link>
        </header>
    )
}

export default Header
