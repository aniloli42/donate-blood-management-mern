import React from "react"
import { Link } from "react-router-dom"
import { Hamburger, Sidebar } from ".."
import logo from "../../Assets/Images/blood.svg"
import "./header.css"

const Header = () => {
  return (
    <>
      <header className="container header">
        <Hamburger />
        <Link to="/">
          <img src={logo} alt="Brand Logo" />
          <h1>Donate</h1>
        </Link>
      </header>
      <Sidebar />
    </>
  )
}

export default Header
