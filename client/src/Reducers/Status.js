const reducer = (
	state = { historyCount: 0, requestCount: 0, pendingCount: 0 },
	action
) => {
	switch (action.type) {
		case "SET_STATUS":
			return { ...state, ...action.payload }

		default:
			return state
	}
}

export default reducer
