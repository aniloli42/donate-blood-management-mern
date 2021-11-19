import React, { useRef, useState } from "react"
import show from "../../../Assets/Images/eye.svg"
import hide from "../../../Assets/Images/eye-off.svg"
import { passwordValidation } from "../../../Validation"
import { displayMessage } from "../../../Actions/Message"
import { useDispatch } from "react-redux"
import { changeForgetPassword } from "../../../API/API"
import { useHistory } from "react-router"

const ChangePassword = ({ email }) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const password = useRef(null)
	const retypepassword = useRef(null)

	const [formData, setFormData] = useState({
		newpassword: "",
		retypepassword: "",
	})

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

	const updateFormData = (e) => {
		setFormData((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handlePassword = async (e) => {
		e.preventDefault()

		if (formData.newpassword !== formData.retypepassword)
			return dispatch(displayMessage("Password Not Matched"))

		const isMatch = passwordValidation(formData.newpassword)

		if (!isMatch.status) return dispatch(displayMessage(isMatch.message))

		try {
			const { data } = await changeForgetPassword({
				password: formData.newpassword,
				email,
			})

			const { message } = await data

			dispatch(displayMessage(message))

			history.push("/login")
		} catch (error) {
			const message = error?.response?.data?.message

			message === undefined
				? dispatch(displayMessage(error.message))
				: dispatch(displayMessage(message))
		}
	}

	return (
		<div className='entry-form-div'>
			<form className='entry-form' method='post' onSubmit={handlePassword}>
				<h2>Change Password</h2>

				<div className='entry-elements'>
					<label htmlFor='newpassword'>New Password</label>
					<div className='group-entry-element'>
						<input
							type='password'
							name='newpassword'
							ref={password}
							id='newpassword'
							value={formData.newpassword}
							onChange={updateFormData}
							autoComplete='off'
						/>
						<img src={show} alt='show hide icon' onClick={changePasswordType} />
					</div>
				</div>

				<div className='entry-elements'>
					<label htmlFor='retypepassword'>Retype Password</label>
					<input
						type='password'
						name='retypepassword'
						ref={retypepassword}
						value={formData.retypepassword}
						onChange={updateFormData}
						id='retypepassword'
						autoComplete='off'
					/>
				</div>

				<div className='entry-button'>
					<button type='submit'>Change Password</button>
				</div>
			</form>
		</div>
	)
}

export default ChangePassword
