import * as api from "./../api/API"

export const getHistory = (id) => async (dispatch) => {
	try {
		const { data } = await api.getHistory(id)
		const { history } = await data
		dispatch({ type: "GET_HISTORY", payload: history })
	} catch (e) {
		console.log(e.message)
	}
}

export const removeHistory = () => {
	return {
		type: "REMOVE_HISTORY",
	}
}
