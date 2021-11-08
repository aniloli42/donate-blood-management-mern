export const displayMessage = (message, status = false) => {
	return {
		type: "DISPLAY_MESSAGE",
		payload: { message, status },
	}
}

export const clearMessage = () => {
	return {
		type: "CLEAR_MESSAGE",
	}
}
