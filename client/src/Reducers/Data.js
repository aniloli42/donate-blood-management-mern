const reducer = (state = [], action) => {
	switch (action.type) {
		case "GET_REQUESTS":
			return state

		case "GET_OWN_REQUESTS":
			return state

		case "GET_PROFILE":
			return state

		case "GET_ALL_DATA":
			return state

		default:
			return state
	}
}

export default reducer
