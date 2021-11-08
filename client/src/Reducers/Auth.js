const Auth = (state = { Auth: false, profile: null, token: null }, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				Auth: true,
				token: action.payload.token,
				profile: action.payload.profile,
			}

		case "SIGNUP":
			return {
				...state,
				Auth: true,
				token: action.payload.token,
				profile: action.payload.user,
			}

		case "LOGOUT":
			return { Auth: false, profile: null, token: null }

		default:
			return state
	}
}

export default Auth
