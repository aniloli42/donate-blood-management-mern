import * as api from "./../API/API"
import { displayMessage } from "./Message"

export const setProfile = () => async (dispatch) => {
	try {
		const { data } = await api.getProfile()
		const { profile } = await data
		dispatch({
			type: "SET_PROFILE",
			payload: profile,
		})
	} catch (err) {
		dispatch(displayMessage(err.displayMessage))
	}
}
