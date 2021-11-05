export const login = (history) => {
	localStorage.setItem("profile", JSON.stringify({ name: "Anil Oli" }))
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
