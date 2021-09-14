const loginValidation = () => {
	const getProfile = localStorage.getItem('profile')

	if (getProfile != null) {
		const profile = JSON.parse(getProfile)
		return { status: true, profile }
	}

	return { status: false }
}

export default loginValidation
