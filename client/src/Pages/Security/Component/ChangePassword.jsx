import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

import { displayMessage } from "./../../../Actions/Message"
import { changePassword } from "./../../../Actions/Auth"
import { passwordValidation } from "./../../../Validation/index"

const ChangePassword = () => {
	const dispatch = useDispatch()
	const history = useNavigate()

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

	const handlePasswordChange = async (e) => {
		e.preventDefault()
		if (
			formData.oldPassword === "" ||
			formData.newPassword === "" ||
			formData.retypePassword === ""
		) {
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
			return dispatch(displayMessage("Password atleast 8 characters"))
		}

		if (formData.newPassword !== formData.retypePassword) {
			return dispatch(
				displayMessage("New Password and Retype Password Not Matched")
			)
		}

		if (formData.newPassword === formData.oldPassword) {
			return dispatch(displayMessage("New Password and Old Password is Idle"))
		}

		try {
			dispatch(changePassword(formData, setFormData))
		} catch (err) {
			dispatch(displayMessage(err.message))
		}
	}

	return (
		<section>
			<h3>Change Password</h3>
			<hr />
			<form onSubmit={handlePasswordChange}>
				<div className="input-group">
					<label htmlFor="oldPassword">Old Password</label>
					<input
						type="password"
						value={formData.oldPassword}
						onChange={handleChange}
						name="oldPassword"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="newPassword">New Password</label>
					<input
						type="password"
						value={formData.newPassword}
						onChange={handleChange}
						name="newPassword"
					/>
				</div>

				<div className="input-group">
					<label htmlFor="retypePassword">Retype Password</label>
					<input
						type="password"
						value={formData.retypePassword}
						onChange={handleChange}
						name="retypePassword"
					/>
				</div>
				<div className="input-buttons">
					<button type="submit">Change Password</button>
					<button onClick={() => history("/forget-password")}>
						Forget Password?
					</button>
				</div>
			</form>
		</section>
	)
}

export default ChangePassword
