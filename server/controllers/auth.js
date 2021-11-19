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
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const signup = async (req, res) => {
	const {
		name,
		email,
		bloodType,
		temporaryAddress,
		permanentAddress,
		password,
	} = req.body

	try {
		const user = await User.findOne({ email })

		if (user) {
			return res.status(400).json({ message: "User already exists" })
		}

		const hashedPassword = await bcrypt.hash(password, 12)

		const newUser = new User({
			name,
			email,
			bloodType,
			temporaryAddress,
			permanentAddress,
			password: hashedPassword,
		})

		const createdUser = await newUser.save()

		const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET)

		return res.status(200).json({
			message: "Login Successful",
			token,
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const changePassword = async (req, res) => {}

const changeForgetPassword = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })

		const hashedPassword = await bcrypt.hash(password, 12)

		user.password = hashedPassword

		await user.save()

		return res.status(200).json({ message: "Password Successfully Changed" })
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}

const deleteAccount = async (req, res) => {
	try {
		const { password } = req.body

		const user = await User.findOne({ id: req.user.id })

		if (!user)
			return res.status(400).json({
				message: "User does not exists",
			})

		const isMatched = await bcrypt.compare(password, user.password)

		if (!isMatched)
			return res.status(400).json({ message: "Invaild Credentials" })

		await user.remove()

		return res.status(200).json({ message: "Account Successfully Deleted" })
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}

module.exports = {
	login,
	signup,
	changePassword,
	changeForgetPassword,
	deleteAccount,
}
