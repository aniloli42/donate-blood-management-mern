import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { displayMessage } from "../../../Actions/Message"
import { sendOTP } from "../../../API/API"
import { emailValidation } from "../../../Validation"

const inputData = { email: "" }

const Forget = ({ changeElement }) => {
	const dispatch = useDispatch()
	const [formData, setformData] = useState(inputData)

	const updateFormData = (e) => {
		setformData((prevformData) => {
			return { ...prevformData, [e.target.name]: e.target.value }
		})
	}

	const handleForget = async (e) => {
		e.preventDefault()

		if (!emailValidation(formData.email))
			return dispatch(displayMessage("Invalid Email"))

		try {
			const { data } = await sendOTP(formData)
			const { message } = await data

			dispatch(displayMessage(message))

			changeElement(formData.email)
		} catch (error) {
			const message = error?.response?.data?.message

			message === undefined
				? dispatch(displayMessage(error.message))
				: dispatch(displayMessage(message))
		}
	}

	return (
		<div className='entry-form-div'>
			<form className='entry-form forget' method='post' onSubmit={handleForget}>
				<h2>Forget Password</h2>
				<div className='entry-elements'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						email='email'
						value={formData.email}
						id='email'
						name='email'
						autoComplete='off'
						onChange={updateFormData}
					/>
				</div>
				<div className='entry-button'>
					<button type='submit'>Reset Password</button>
				</div>
			</form>
		</div>
	)
}

export default Forget
