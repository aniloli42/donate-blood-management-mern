import React from "react";

import logo from "../../Assets/Images/blood.svg"

const OTP = () => {
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
                    <h2>Verify OTP</h2>
                    <div className="entry-elements">
                        <label htmlFor="otp">Enter OTP</label>
                        <input type="text" otp="otp" id="otp" autoComplete='off' />
                    </div>
                    <div className="entry-button">
                        <button type="submit">Verify</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default OTP