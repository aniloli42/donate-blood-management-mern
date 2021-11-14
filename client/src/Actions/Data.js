import * as api from "../API/API"
import { displayMessage } from "./Message"

export const fetchData = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchData(id)

		dispatch({
			type: "FETCH_DATA",
			payload: data,
		})
	} catch (e) {
		const error = e.response.data.message
		dispatch(displayMessage(error ? error : "Something wrong"))
	}
}
