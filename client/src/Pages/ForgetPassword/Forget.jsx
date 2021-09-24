import React from 'react'
import "./forget.css"
import logo from "../../Assets/Images/blood.svg"

const Login = () => {


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
                <form className="entry-form forget" method="post">
                    <h2>Forget Password</h2>
                    <div className="entry-elements">
                        <label htmlFor="email">Email</label>
                        <input type="text" email="email" id="email" autoComplete='off' />
                    </div>
                    <div className="entry-button">
                        <button type="submit">Reset Password</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
