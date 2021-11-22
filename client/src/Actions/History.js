import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const getHistorys = () => async (dispatch) => {
	try {
		const { data } = await api.getHistorys()

		const { history } = await data

		dispatch({ type: "GET_HISTORYS", payload: history })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const createHistory = (formData, func) => async (dispatch) => {
	try {
		const { data } = await api.createHistory(formData)
		const { message } = await data
		dispatch(displayMessage(message))
		func()

		dispatch(getHistorys())
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const deleteHistory = (id) => async (dispatch) => {
	try {
		const { data } = await api.deleteHistory(id)
		const { message } = await data
		dispatch(displayMessage(message))

		dispatch(getHistorys())
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const updateHistory = (formData, id, func) => async (dispatch) => {
	try {
		const { data } = await api.updateHistory(formData, id)
		const { message } = await data
		dispatch(displayMessage(message))
		dispatch(getHistorys())
		dispatch({ type: "DELETE_HISTORY" })
		func()
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}
