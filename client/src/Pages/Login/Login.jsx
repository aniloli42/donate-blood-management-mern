import React, { useRef } from 'react'
import "../Styles/style.css"
import logo from "../../Assets/Images/blood.svg"
import show from "../../Assets/Images/eye.svg"
import hide from "../../Assets/Images/eye-off.svg"
import { Link } from 'react-router-dom'

const Login = () => {

    const password = useRef(null)

    const changePasswordType = (e) => {

        if (password.current.type === "password") {
            e.target.src = hide
            password.current.type = "text"
            return
        }

        e.target.src = show
        password.current.type = "password"
        return

    }

    return (
        <div className="user-entry">

            {/* Brand Showcase */}

            <div className="brand-showcase">
                {/* Brand Logo */}
                <div className="brand-logo">
                    <img src={logo} alt="" />
                    <h1>DONATE</h1>
                </div>
                <p className="brand-slogon">
                    Every drop of blood matters, if you can save life
                </p>
            </div>
            <div className="entry-form-div">
                <form className="entry-form">
                    <h2>Login</h2>
                    <div className="entry-elements">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" autoComplete='off' />
                    </div>
                    <div className="entry-elements">
                        <label htmlFor="password">Password</label>
                        <div className="group-entry-element">
                            <input type="password" name="password" ref={password} id="password" autoComplete='off' />
                            <img src={show} alt="show hide icon" onClick={changePasswordType} />
                        </div>
                    </div>

                    <div className="entry-button">
                        <button type="submit">LOGIN</button>
                        <Link to="/forget-password">Forget Password?</Link>
                    </div>
                </form>

                <div className="entry-message">
                    <p>Don't have any account?</p>
                    <Link to="/signup">Click Here</Link>
                </div>
            </div>

        </div>
    )
}

export default Login
