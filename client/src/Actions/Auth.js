import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const login = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.login(formData)
		const { token, user } = await data

		localStorage.setItem("token", token)
		localStorage.setItem("profile", JSON.stringify(user))

		dispatch({
			type: "LOGIN",
			payload: { user, token },
		})

		history.push("/")
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage(error.message), true)
			: dispatch(displayMessage(message), true)
	}
}

export const signup = (formdata, history) => async (dispatch) => {
	try {
		const { data } = await api.signup(formdata)
		const { token, user } = await data

		localStorage.setItem("token", token)
		localStorage.setItem("profile", JSON.stringify(user))

		dispatch({
			type: "SIGNUP",
			payload: { user, token },
		})

		history.push("/")
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage(error.message), true)
			: dispatch(displayMessage(message), true)
	}
}

export const logout = (history) => {
	localStorage.clear()

	history.push("/login")

	return {
		type: "LOGOUT",
	}
}
