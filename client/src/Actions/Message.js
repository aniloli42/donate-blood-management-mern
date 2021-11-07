export const showMessage = (message, type) => {
	return {
		type: "SHOW_MESSAGE",
		payload: message,
	}
}
