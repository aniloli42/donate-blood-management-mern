import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const login = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.login(formData)
		const { message, token, user } = await data

		localStorage.setItem("token", token)
		localStorage.setItem("profile", JSON.stringify(user))

		dispatch(displayMessage(message, true))

		dispatch({
			type: "LOGIN",
			payload: { user, token },
		})

		setTimeout(() => {
			history.push("/")
		}, 2000)
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage("Error Not Handled!"), true)
			: dispatch(displayMessage(message), true)
	}
}

export const signup = (formdata, history) => async (dispatch) => {
	try {
		const { data } = await api.signup(formdata)
		const { message, token, user } = await data

		localStorage.setItem("token", token)
		localStorage.setItem("profile", JSON.stringify(user))

		dispatch(displayMessage(message, true))

		dispatch({
			type: "SIGNUP",
			payload: { user, token },
		})

		setTimeout(() => {
			history.push("/")
		}, 2000)
	} catch (error) {
		const message = error?.response?.data?.message

		message === undefined
			? dispatch(displayMessage("Error Not Handled!"), true)
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
