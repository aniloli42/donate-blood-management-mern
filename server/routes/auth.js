const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

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

// Updating

router.post("/", tokenVerify, fetchData)
router.post("/profile", tokenVerify, fetchOwnProfile)
router.get("/profile/:id", tokenVerify, fetchProfile)

router.patch("/profile/update/:id", tokenVerify, updateProfile)
router.patch("/own-requests/:id", tokenVerify, updateOwnRequest)

module.exports = router
