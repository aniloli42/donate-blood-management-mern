const Auth = (state = { isAuth: false }, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				isAuth: true,
			}

		case "LOGOUT":
			return { isAuth: false }

		default:
			return state
	}
}

export default Auth
