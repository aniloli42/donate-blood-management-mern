const fetchData = (req, res) => {
	res.json({ message: "Hello World!" })
}

const createRequests = (req, res) => {}

const fetchOwnProfile = (req, res) => {}
const fetchProfile = (req, res) => {}
const fetchDonationHistory = (req, res) => {}
const fetchOwnRequests = (req, res) => {}
const fetchOthersRequests = (req, res) => {}

const updateProfile = (req, res) => {}
const updateOwnRequest = (req, res) => {}

module.exports = {
	fetchData,
	fetchOwnProfile,
	fetchProfile,
	fetchDonationHistory,
	fetchOwnRequests,
	fetchOthersRequests,
	updateProfile,
	updateOwnRequest,
	createRequests,
}
