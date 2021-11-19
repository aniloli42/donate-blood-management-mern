require("dotenv").config()
const User = require("../models/user")
const getProfile = async (req, res) => {
	try {
		const { id } = req.user

		const user = await User.findById(id).select("-password -_id -__v")
		return res.status(200).json({ profile: user })
	} catch (err) {
		console.log(err.message)
		return res.status(500).json({ message: err.message })
	}
}

module.exports = { getProfile }
