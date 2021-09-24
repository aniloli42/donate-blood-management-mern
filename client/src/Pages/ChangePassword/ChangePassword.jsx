import React, { useRef } from 'react'
import logo from "../../Assets/Images/blood.svg"
import show from "../../Assets/Images/eye.svg"
import hide from "../../Assets/Images/eye-off.svg"

const ChangePassword = () => {

    const password = useRef(null)
    const retypepassword = useRef(null)

    const changePasswordType = (e) => {

        if (password.current.type === "password") {
            e.target.src = hide
            password.current.type = "text"
            retypepassword.current.type = "text"
            return
        }

        e.target.src = show
        password.current.type = "password"
        retypepassword.current.type = "password"
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
                <form className="entry-form" method="post">
                    <h2>Change Password</h2>

                    <div className="entry-elements">
                        <label htmlFor="newpassword">New Password</label>
                        <div className="group-entry-element">
                            <input type="password" name="newpassword" ref={password} id="newpassword" autoComplete='off' />
                            <img src={show} alt="show hide icon" onClick={changePasswordType} />
                        </div>
                    </div>

                    <div className="entry-elements">
                        <label htmlFor="retypepassword">Retype Password</label>
                        <input type="password" name="retypepassword" ref={retypepassword} id="retypepassword" autoComplete='off' />
                    </div>

                    <div className="entry-button">
                        <button type="submit">Change Password</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ChangePassword
