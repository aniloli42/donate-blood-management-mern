import React, { useState } from "react"
import { useDispatch } from "react-redux"
import "./changeEmail.css"

import { displayMessage } from "./../../Actions/Message"
import { changeEmail } from "./../../Actions/Auth"
import { emailValidation, passwordValidation } from "./../../Validation/index"

const ChangeEmail = ({ func }) => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({ email: "", password: "" })

	const handleChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleEmailChange = async (e) => {
		try {
			e.preventDefault()

			if (formData.email === "" || formData.password === "") {
				return dispatch(displayMessage("Enter email & password"))
			}

			if (!emailValidation(formData.email)) {
				return dispatch(displayMessage("Invalid Email"))
			}

			const checkPassword = passwordValidation(formData.password)

			if (!checkPassword.status) {
				return dispatch(displayMessage(checkPassword.message))
			}

			dispatch(changeEmail(formData, func))
		} catch (error) {
			return dispatch(displayMessage(error.message))
		}
	}

	return (
		<form method='post' onSubmit={handleEmailChange}>
			<div className='input-group'>
				<label>New Email</label>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<div className='input-group'>
				<label>Enter Password</label>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
				/>
			</div>
			<div className='input-buttons'>
				<button type='submit' className='button'>
					Change Email
				</button>
			</div>
		</form>
	)
}

export default ChangeEmail
