import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { displayMessage } from "./../../../Actions/Message"
import { changePassword } from "./../../../Actions/Auth"
import { passwordValidation } from "./../../../Validation/index"
import { Loader } from "../../../Components"

const ChangePassword = () => {
	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(false)

	const [formData, setFormData] = useState({
		oldPassword: "",
		newPassword: "",
		retypePassword: "",
	})

	const handleChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const changeLoading = () => {
		setIsLoading((prev) => !prev)
	}

	const handlePasswordChange = async (e) => {
		e.preventDefault()
		changeLoading()
		if (
			formData.oldPassword === "" ||
			formData.newPassword === "" ||
			formData.retypePassword === ""
		) {
			changeLoading()
			return dispatch(displayMessage("Enter all Inputs"))
		}

		const oldPasswordValid = passwordValidation(formData.oldPassword)
		const retypePasswordValid = passwordValidation(formData.retypePassword)
		const newPasswordValid = passwordValidation(formData.newPassword)

		if (
			!oldPasswordValid.status ||
			!retypePasswordValid.status ||
			!newPasswordValid.status
		) {
			changeLoading()
			return dispatch(displayMessage("Password atleast 8 characters"))
		}

		if (formData.newPassword !== formData.retypePassword) {
			changeLoading()
			return dispatch(
				displayMessage("New Password and Retype Password Not Matched")
			)
		}

		try {
			dispatch(changePassword(formData, setFormData, changeLoading))
		} catch (err) {
			dispatch(displayMessage(err.message))
			changeLoading()
		}
	}

	return (
		<section>
			<h3>Change Password</h3>
			<hr />
			<form onSubmit={handlePasswordChange}>
				<div className='input-group'>
					<label htmlFor='oldPassword'>Old Password</label>
					<input
						type='password'
						value={formData.oldPassword}
						onChange={handleChange}
						name='oldPassword'
					/>
				</div>

				<div className='input-group'>
					<label htmlFor='newPassword'>New Password</label>
					<input
						type='password'
						value={formData.newPassword}
						onChange={handleChange}
						name='newPassword'
					/>
				</div>

				<div className='input-group'>
					<label htmlFor='retypePassword'>Retype Password</label>
					<input
						type='password'
						value={formData.retypePassword}
						onChange={handleChange}
						name='retypePassword'
					/>
				</div>
				<div className='input-buttons'>
					<button type='submit'>
						{isLoading && <Loader />}
						Change Password
					</button>
					<button>Forget Password?</button>
				</div>
			</form>
		</section>
	)
}

export default ChangePassword
