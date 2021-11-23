import React, { useEffect, useState } from "react"

import Card from "./Card"
import Popup from "../../../Components/Popup/Popup"
import { stringValidation } from "../../../Validation"
import { displayMessage } from "../../../Actions/Message"
import { createRequest, updateRequest } from "../../../Actions/Request"
import { removeRequest } from "../../../Actions/manageRequest"
import styles from "./card.module.css"

import { useDispatch, useSelector } from "react-redux"

const CreateRequest = ({ func }) => {
	const dispatch = useDispatch()
	const Request = useSelector((state) => state.manageRequest)

	const [formData, setFormData] = useState({
		name: "",
		bloodType: "O+",
		location: "",
		phone: "",
	})

	useEffect(() => {
		if (!Request.status) return

		const { request } = Request

		setFormData((prev) => {
			return {
				...prev,
				...request,
			}
		})
	}, [Request])

	const handleChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const phoneValidation = (input) => {
		return input.toString().length === 10 ? true : false
	}

	const handleRequestCreate = async (e) => {
		e.preventDefault()

		try {
			if (!stringValidation(formData.name))
				return dispatch(displayMessage("Invalid Name"))

			if (!stringValidation(formData.location))
				return dispatch(displayMessage("Invalid Location"))

			if (!phoneValidation(formData.phone))
				return dispatch(displayMessage("Phone number must in 10 numbers"))

			formData.phone = parseInt(formData.phone)

			dispatch(createRequest(formData, func))
		} catch (error) {
			dispatch(displayMessage(error.message))
		}
	}

	const handleRequestUpdate = async (e) => {
		e.preventDefault()
		try {
			console.log(formData)

			if (!stringValidation(formData.name))
				return dispatch(displayMessage("Invalid Name"))

			if (!stringValidation(formData.location))
				return dispatch(displayMessage("Invalid Location"))

			if (!phoneValidation(formData.phone))
				return dispatch(displayMessage("Phone number must in 10 numbers"))

			formData.phone = parseInt(formData.phone)

			dispatch(updateRequest(formData, formData._id, func))
		} catch (error) {
			dispatch(displayMessage(error.message))
		}
	}

	const handleDone = async (e) => {
		e.preventDefault()
		try {
			formData.phone = parseInt(formData.phone)

			dispatch(
				updateRequest({ ...Request?.request, status: true }, formData._id, func)
			)
		} catch (error) {
			dispatch(displayMessage(error.message))
		}
	}

	return (
		<Popup
			title={Request.status ? "Edit Request" : "Create Request"}
			func={() => {
				dispatch(removeRequest())
				func()
			}}
		>
			<form>
				<Card
					input
					label='Name'
					value={formData.name}
					name='name'
					type='text'
					handleChange={handleChange}
					required
				/>
				<Card
					select
					options={["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]}
					label='Blood Type'
					value={formData.bloodType}
					name='bloodType'
					handleChange={handleChange}
					required
				/>
				<Card
					input
					label='Location'
					value={formData.location}
					name='location'
					type='text'
					handleChange={handleChange}
					required
				/>
				<Card
					input
					label='Phone'
					value={formData.phone}
					name='phone'
					type='text'
					handleChange={handleChange}
					required
				/>

				<div className='button-group'>
					{!Request.status && (
						<button
							type='submit'
							className='button'
							onClick={handleRequestCreate}
						>
							Create
						</button>
					)}
					{Request.status && (
						<>
							<button
								type='submit'
								className='button'
								onClick={handleRequestUpdate}
							>
								Update
							</button>
							<button
								className={`${styles.buttonCircle} button`}
								onClick={handleDone}
							>
								<i className='fa fa-check'></i>
							</button>
						</>
					)}
				</div>
				{Request.status && (
					<div className={`${styles.messageDone} message`}>
						Note: Done Request cannot be edit and update later.
					</div>
				)}
			</form>
		</Popup>
	)
}

export default CreateRequest
