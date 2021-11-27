require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const Token = require("../models/token")

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

		const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: "10m",
		})

		const refreshToken = generateRefreshToken({})

		await storeToken({ refreshToken, id: user._id })

		return res.status(200).json({
			message: "Login Successful",
			token,
			refreshToken,
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

		const token = jwt.sign(
			{ id: createdUser._id },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "10m",
			},
		)

		const refreshToken = generateRefreshToken({ id: createdUser._id })

		await storeToken({ refreshToken, id: createdUser._id })

		return res.status(200).json({
			token,
			refreshToken,
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const changePassword = async (req, res) => {
	const { id } = req.user
	const { oldPassword, newPassword } = req.body

	try {
		const user = await User.findById(id)
		if (!user) return res.status(400).json({ message: "User does not Exists" })

		const isMatched = await bcrypt.compare(oldPassword, user?.password)

		if (!isMatched)
			return res.status(400).json({ message: "Invalid Credentials" })

		const hashedPassword = await bcrypt.hash(newPassword, 12)

		user.password = hashedPassword

		await user.save()

		return res.status(200).json({ message: "Password Changed Successfully" })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

const changeEmail = async (req, res) => {
	const { id } = req.user
	const { email, password } = req.body

	try {
		const user = await User.findById(id)

		if (!user) return res.status(400).json({ message: "User not Exists" })

		if (email === user.email)
			return res.status(400).json({ message: "Enter New Email" })

		const isMatched = await bcrypt.compare(password, user.password)

		if (!isMatched)
			return res.status(400).json({ message: "Invalid Credentials" })

		const isEmailIsUsed = await User.findOne({ email })

		if (isEmailIsUsed)
			return res.status(400).json({ message: "Email Already Used" })

		user.email = email

		await user.save()

		return res.status(200).json({ message: "Email Successfully Changed" })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

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

		const user = await User.findById(req.user.id)

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

const token = async (req, res) => {
	try {
		const { refreshToken } = req.body

		const result = await Token.findOne({ token: refreshToken })

		if (!result) return res.status(403).json({ message: "Invalid User" })

		jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
			if (err) return res.status(403).json({ message: err.message })

			const { id } = user

			console.log(user)

			const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: "10m",
			})

			return res.status(200).json({ token })
		})
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}

const logout = async (req, res) => {
	try {
		const { refreshToken } = req.body
		const { id } = req.user

		const token = await Token.findOne({ token: refreshToken, assign: id })

		if (!token) return res.status(400).json({ message: "Invalid Token" })

		await token.remove()

		res.status(200).json({ message: "Logout Successfully" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

function generateRefreshToken(id) {
	return jwt.sign(id, process.env.REFRESH_TOKEN_SECRET)
}

async function storeToken({ refreshToken, id }) {
	try {
		const newToken = new Token({
			token: refreshToken,
			assign: id,
		})

		await newToken.save()

		return
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}

module.exports = {
	login,
	signup,
	changePassword,
	changeForgetPassword,
	deleteAccount,
	changeEmail,
	token,
	logout,
}
