export const login = (history) => {
	history.push("/")
	return {
		type: "LOGIN",
	}
}

export const logout = (history) => {
	localStorage.clear()
	history.push("/login")

	return {
		type: "LOGOUT",
	}
}
