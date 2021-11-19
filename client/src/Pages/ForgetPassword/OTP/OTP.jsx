import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { displayMessage } from "../../../Actions/Message"
import { verifyOTP } from "../../../API/API"

const OTP = ({ email, changeElement }) => {
	const dispatch = useDispatch()
	const [otp, setOtp] = useState({ otp: "" })

	const updateFormData = (e) => {
		setOtp((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleOTP = async (e) => {
		e.preventDefault()
		try {
			const intOTP = parseInt(otp.otp)
			const { data } = await verifyOTP({ otp: intOTP, email })
			const { message } = await data

			dispatch(displayMessage(message))
			changeElement()
		} catch (error) {
			const message = error?.response?.data?.message

			message === undefined
				? dispatch(displayMessage(error.message))
				: dispatch(displayMessage(message))
		}
	}

	return (
		<div className='entry-form-div'>
			<form className='entry-form forget' method='post' onSubmit={handleOTP}>
				<h2>Verify OTP</h2>
				<div className='entry-elements'>
					<label htmlFor='otp'>Enter OTP</label>
					<input
						type='text'
						name='otp'
						value={otp.otp}
						onChange={updateFormData}
						id='otp'
						autoComplete='off'
					/>
				</div>
				<div className='entry-button'>
					<button type='submit'>Verify</button>
				</div>
			</form>
		</div>
	)
}

export default OTP
