import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const login = (history) => async (dispatch) => {
	const profile = { name: "Anil Oli" }
	const token = "aaaa"
	localStorage.setItem("profile", JSON.stringify(profile))
	localStorage.setItem("token", token)

	setTimeout(() => {
		history.push("/")
	}, 2000)

	dispatch(displayMessage("Login", true))

	return {
		type: "LOGIN",
		payload: { profile, token },
	}
}

export const signup = (formdata, history) => async (dispatch) => {
	try {
		const { data } = await api.signup(formdata)
		const { message, token, user } = data

		localStorage.setItem("token", token)
		localStorage.setItem("profile", JSON.stringify(user))

		dispatch({
			type: "SIGNUP",
			payload: { user, token },
		})

		dispatch(displayMessage(message, true))

		setTimeout(() => {
			history.push("/")
		}, 2000)
	} catch (error) {
		const message = error.response.data.message

		dispatch(displayMessage(message))
	}
}

export const logout = (history) => {
	localStorage.clear()

	history.push("/login")

	return {
		type: "LOGOUT",
	}
}
