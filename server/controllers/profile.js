require("dotenv").config()
const User = require("../models/user")
const getProfile = async (req, res) => {
	try {
		const { id } = req.user

		const user = await User.findById(id).select("-password -_id -__v")
		if (!user) return res.status(400).json({ message: "User Not Exists" })

		return res.status(200).json({ profile: user })
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}

const updateProfile = async (req, res) => {
	const { id } = req.user
	const { name, bloodType, temporaryAddress, permanentAddress } = req.body
	try {
		const user = await User.findById(id)
		if (!user) return res.status(400).json({ message: "User Not Exists" })

		user.name = name
		user.bloodType = bloodType
		user.temporaryAddress = temporaryAddress
		user.permanentAddress = permanentAddress

		const changedUser = await user.save()

		return res.status(200).json({
			profile: {
				name: changedUser.name,
				bloodType: changedUser.bloodType,
				temporaryAddress: changedUser.temporaryAddress,
				permanentAddress: changedUser.permanentAddress,
				email: changedUser.email,
			},
			message: "Profile Updated",
		})
	} catch (error) {
		return res.status(500).json({ message: err.message })
	}
}

module.exports = { getProfile, updateProfile }
