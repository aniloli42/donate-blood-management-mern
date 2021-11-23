import * as api from "./../API/API"
import { displayMessage } from "./Message"
import { logout } from "./Auth"

export const setProfile = (history) => async (dispatch) => {
	try {
		const { data } = await api.getProfile()
		const { profile } = await data
		dispatch({
			type: "SET_PROFILE",
			payload: profile,
		})
	} catch (err) {
		dispatch(
			displayMessage(
				err?.response?.data?.message ? err.response.data : err.message
			)
		)
		if (
			err?.response !== undefined ||
			err?.response?.statusText === "Forbidden"
		)
			return dispatch(logout(history))
	}
}

export const updateProfile = (formData, toggleEdit) => async (dispatch) => {
	try {
		const { data } = await api.updateProfile(formData)
		const { message, profile } = await data

		dispatch(displayMessage(message))

		dispatch({
			type: "SET_PROFILE",
			payload: profile,
		})

		toggleEdit()
	} catch (err) {
		dispatch(displayMessage(err.message))
	}
}
