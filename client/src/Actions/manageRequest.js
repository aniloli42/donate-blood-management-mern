import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const getRequest = (id) => async (dispatch) => {
	try {
		const { data } = await api.getRequest(id)
		const { request } = await data
		dispatch({ type: "GET_REQUEST", payload: request })
	} catch (e) {
		const error = e.response?.data?.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}

export const removeRequest = () => {
	return {
		type: "REMOVE_REQUEST",
	}
}
