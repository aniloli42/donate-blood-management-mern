const Auth = (state = { Auth: false }, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, Auth: true, profile: action.payload }

		case "LOGOUT":
			return { Auth: false, profile: null }

		default:
			return state
	}
}

export default Auth
