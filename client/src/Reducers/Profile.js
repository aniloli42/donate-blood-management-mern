const Profile = (state = null, action) => {
	switch (action.type) {
		case "SET_PROFILE":
			return { ...state, ...action.payload }

		case "CHANGE_PROFILE":
			return { ...state, ...action.payload }

		default:
			return state
	}
}

export default Profile
