const express = require("express")
const router = express.Router()

// Importing the controller
const {
	login,
	signup,
	resetPassword,
	deleteAccount,
	verifyEmail,
	verifyOTP,
} = require("../controllers/auth")

// routes
router.post("/login", login)
router.post("/signup", signup)
router.post("/verify-email", verifyEmail)
router.post("verify-otp", verifyOTP)
router.patch("/reset-password", resetPassword)
router.delete("/delete-account", deleteAccount)

module.exports = router
