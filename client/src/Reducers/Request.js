const reducer = (
	state = { ownRequest: [], otherRequest: [], recentRequest: [] },
	action,
) => {
	switch (action.type) {
		case "SET_OWN_REQUEST":
			return {
				...state,
				ownRequest: [...action.payload],
			}

		case "SET_OTHER_REQUEST":
			return {
				...state,
				otherRequest: [...action.payload],
			}

		case "SET_RECENT_REQUEST":
			return {
				...state,
				recentRequest: [...action.payload],
			}

		case "CLEAR_REQUEST":
			return { ownRequest: [], otherRequest: [], recentRequest: [] }

		default:
			return state
	}
}

export default reducer
