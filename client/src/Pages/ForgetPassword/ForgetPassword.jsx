import React, { useState } from 'react'
import './forget.css'
import logo from '../../Assets/Images/blood.png'
import { Link } from 'react-router-dom'

import Forget from './Forget/Forget'
import OTP from './OTP/OTP'
import ChangePassword from './ChangePassword/ChangePassword'

const ForgetPassword = () => {
	const [forget, setForget] = useState(true)
	const [otp, setOtp] = useState(false)
	const [password, setPassword] = useState(false)
	const [emailId, setEmail] = useState(null)

	const changeOtp = email => {
		setForget(prev => !prev)
		setOtp(prev => !prev)
		setEmail(email)
	}
	const changePassword = () => {
		setOtp(prev => !prev)
		setPassword(prev => !prev)
	}

	return (
		<>
			<div className='user-entry'>
				{/* Brand Showcase */}

				<div className='brand-showcase'>
					{/* Brand Logo */}
					<div className='brand-logo'>
						<img src={logo} alt='' />
						<h1>DONATE</h1>
					</div>
					<p className='brand-slogon'>
						Every drop of blood matters, if you can save life
					</p>
					<Link to='/login' className='backBtn'>
						Go To Login Page
					</Link>
				</div>
				{forget && <Forget changeElement={changeOtp} />}
				{otp && <OTP changeElement={changePassword} email={emailId} />}
				{password && <ChangePassword email={emailId} />}
			</div>
		</>
	)
}

export default ForgetPassword
