const reducer = (state = [], action) => {
	switch (action.type) {
		case "GET_HISTORYS":
			return [...action.payload]

		case "CLEAR_HISTORYS":
			return []

		default:
			return state
	}
}

export default reducer
