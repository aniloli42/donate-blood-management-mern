import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const login = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.login(formData)
		const { token } = await data

		localStorage.setItem("token", token)

		dispatch({
			type: "LOGIN",
			payload: token,
		})

		history.push("/")
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage(error.message))
			: dispatch(displayMessage(message))
	}
}

export const signup = (formdata, history) => async (dispatch) => {
	try {
		const { data } = await api.signup(formdata)
		const { token } = await data

		localStorage.setItem("token", token)

		dispatch({
			type: "LOGIN",
			payload: token,
		})

		history.push("/")
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage(error.message))
			: dispatch(displayMessage(message))
	}
}

export const logout = (history) => {
	localStorage.clear()

	history.push("/login")

	return {
		type: "LOGOUT",
	}
}
