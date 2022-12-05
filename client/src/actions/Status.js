import * as api from '../api/API'

export const getStatus = () => async (dispatch) => {
	try {
		const { data } = await api.getStatus()

		dispatch({ type: 'SET_STATUS', payload: data })
	} catch (error) {
		console.log(error.message)
	}
}
