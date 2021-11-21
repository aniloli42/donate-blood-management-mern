import * as api from "./../API/API"
import { displayMessage } from "./Message"
import { setProfile } from "./Profile"

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

export const changeEmail = (formData, func) => async (dispatch) => {
	try {
		const { data } = await api.changeEmail(formData)
		const { message } = await data

		dispatch(displayMessage(message))

		dispatch(setProfile())

		func()
	} catch (error) {
		const message = error?.response?.data?.message
		message === undefined
			? dispatch(displayMessage(error.message))
			: dispatch(displayMessage(message))
	}
}

export const changePassword =
	(formData, setFormData, changeLoading) => async (dispatch) => {
		try {
			const { data } = await api.changePassword(formData)
			const { message } = await data

			dispatch(displayMessage(message))

			setFormData((prev) => {
				return { ...prev, oldPassword: "", newPassword: "", retypePassword: "" }
			})

			changeLoading()
		} catch (error) {
			changeLoading()
			const message = error?.response?.data?.message

			message === undefined
				? dispatch(displayMessage(error.message))
				: dispatch(displayMessage(message))
		}
	}
