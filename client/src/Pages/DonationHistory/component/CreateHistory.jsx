import React, { useEffect, useState } from "react"

import Card from "./Card"
import Popup from "../../../Components/Popup/Popup"
import { stringValidation } from "../../../Validation"
import { displayMessage } from "../../../Actions/Message"
import { createHistory, updateHistory } from "../../../Actions/History"
import { removeHistory } from "../../../Actions/manageHistory"

import { useDispatch, useSelector } from "react-redux"

const CreateHistory = ({ func }) => {
	const dispatch = useDispatch()
	const history = useSelector((state) => state.manageHistory)

	const [formData, setFormData] = useState({
		donatedAt: "",
		location: "",
		remarks: "",
	})

	useEffect(() => {
		if (!history.status) return
		history.history.donatedAt = new Date(history.history.donatedAt)
			.toISOString()
			.substring(0, 10)

		setFormData((prev) => {
			return {
				...prev,
				...history.history,
			}
		})
	}, [history])

	const handleChange = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const handleHistoryCreate = async (e) => {
		e.preventDefault()
		try {
			if (!stringValidation(formData.location))
				return dispatch(displayMessage("Invalid Location"))

			formData.donatedAt = new Date(formData.donatedAt).toISOString()

			dispatch(createHistory(formData, func))
		} catch (error) {
			dispatch(displayMessage(error.message))
		}
	}

	const handleHistoryUpdate = async (e) => {
		e.preventDefault()
		try {
			if (!stringValidation(formData.location))
				return dispatch(displayMessage("Invalid Location"))

			formData.donatedAt = new Date(formData.donatedAt).toISOString()

			dispatch(updateHistory(formData, formData._id, func))
		} catch (error) {
			dispatch(displayMessage(error.message))
		}
	}

	return (
		<Popup
			title={history.status ? "Edit History" : "Create History"}
			func={() => {
				dispatch(removeHistory())
				func()
			}}
		>
			<form>
				<Card
					label='Donated At'
					value={formData.donatedAt}
					name='donatedAt'
					type='date'
					handleChange={handleChange}
					required
				/>
				<Card
					label='Location'
					value={formData.location}
					name='location'
					type='text'
					handleChange={handleChange}
					required
				/>
				<Card
					label='Remarks'
					value={formData.remarks}
					name='remarks'
					type='text'
					handleChange={handleChange}
				/>
				<div className='button-group'>
					{!history.status && (
						<button
							type='submit'
							className='button'
							onClick={handleHistoryCreate}
						>
							Create
						</button>
					)}
					{history.status && (
						<>
							<button
								type='submit'
								className='button'
								onClick={handleHistoryUpdate}
							>
								Update
							</button>
						</>
					)}
				</div>
			</form>
		</Popup>
	)
}

export default CreateHistory
