import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const getHistory = (id) => async (dispatch) => {
	try {
		const { data } = await api.getHistory(id)
		const { history } = await data
		dispatch({ type: "GET_HISTORY", payload: history })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const deleteHistory = () => {
	return {
		type: "DELETE_HISTORY",
	}
}
