const Auth = (state = { token: null, isAuth: false }, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				token: action.payload,
				isAuth: true,
			}

		case "LOGOUT":
			return { token: null, isAuth: false }

		default:
			return state
	}
}

export default Auth
