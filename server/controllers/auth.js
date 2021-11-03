const login = async (req, res) => {
	res.send("login")
}

const signup = async (req, res) => {
	const { email, password } = req.body

	console.log(email, password)

	res.send(`${email}`)
}

const resetPassword = async (req, res) => {}

const deleteAccount = async (req, res) => {}

const verifyEmail = async (req, res) => {}

const verifyOTP = async (req, res) => {}

module.exports = {
	login,
	signup,
	resetPassword,
	deleteAccount,
	verifyEmail,
	verifyOTP,
}
