import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { passwordValidation } from "./../../Validation/index"
import { displayMessage } from "./../../Actions/Message"
import { deleteAccount } from "./../../Actions/Auth"

const DeleteAccount = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [formData, setFormData] = useState({ password: "" })

	const handleChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleDeleteAccount = async (e) => {
		e.preventDefault()
		try {
			if (formData.password === "") {
				return dispatch(displayMessage("Enter Password"))
			}

			const validPassword = passwordValidation(formData.password)

			if (!validPassword.status) {
				return dispatch(displayMessage(validPassword.message))
			}

			return dispatch(deleteAccount(formData, history))
		} catch (err) {
			dispatch(displayMessage(err.message))
		}
	}

	return (
		<form method='post' onSubmit={handleDeleteAccount}>
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
					Delete Account
				</button>
			</div>
		</form>
	)
}

export default DeleteAccount
