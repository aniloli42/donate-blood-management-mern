const User = require("./../models/user")

async function fetchUser(req, res, next) {
	try {
		const { id } = req.user

		const user = await User.findById(id)

		if (!user) return res.status(400).json({ message: "Invalid User" })

		req.user = user

		next()
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

module.exports = fetchUser
