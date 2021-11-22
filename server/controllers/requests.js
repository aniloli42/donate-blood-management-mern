const fetchData = (req, res) => {
	res.json({ message: "Hello World!" })
}

const createRequests = (req, res) => {}

const fetchOwnProfile = (req, res) => {}
const fetchProfile = (req, res) => {}
const fetchDonationHistory = (req, res) => {}
const fetchOwnRequests = (req, res) => {}
const fetchRequests = (req, res) => {}

const updateProfile = (req, res) => {}
const updateOwnRequest = (req, res) => {}

const deleteRequests = (req, res) => {}

module.exports = {
	fetchData,
	fetchOwnProfile,
	fetchProfile,
	fetchDonationHistory,
	fetchOwnRequests,
	fetchRequests,
	updateProfile,
	updateOwnRequest,
	createRequests,
	deleteRequests,
}
