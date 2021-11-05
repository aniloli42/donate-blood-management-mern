require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

const login = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({ message: "User does not exits" })
		}

		const isMatch = await bcrypt.compare(password, user.password)

		if (!isMatch) {
			return res.status(400).json({ message: "Invalid Credentials." })
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

		return res.status(200).json({
			message: "Login Successful",
			token,
			user: { ...user._doc, password: null },
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const signup = async (req, res) => {
	const { name, email, temporaryAddress, permanentAddress, password } = req.body

	try {
		const user = await User.findOne({ email })

		if (user) {
			return res.status(400).json({ message: "User already exists" })
		}

		const hashedPassword = await bcrypt.hash(password, 12)

		const newUser = new User({
			name,
			email,
			temporaryAddress,
			permanentAddress,
			password: hashedPassword,
		})

		const createdUser = await newUser.save()

		const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET)

		return res.status(200).json({
			message: "Login Successful",
			token,
			user: { ...createdUser._doc, password: null },
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const resetPassword = async (req, res) => {}

const deleteAccount = async (req, res) => {}

const verifyEmail = async (req, res) => {}

const sendOTP = async (req, res) => {}

const verifyOTP = async (req, res) => {}

module.exports = {
	login,
	signup,
	resetPassword,
	deleteAccount,
	sendOTP,
	verifyEmail,
	verifyOTP,
}
