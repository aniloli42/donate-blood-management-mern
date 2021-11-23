const Profile = (state = null, action) => {
	switch (action.type) {
		case "SET_PROFILE":
			return { ...state, ...action.payload }

		case "CHANGE_PROFILE":
			return { ...state, ...action.payload }

		case "CLEAR_PROFILE":
			return null

		default:
			return state
	}
}

export default Profile
