const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

// Importing the controller
const {
	login,
	signup,
	changeForgetPassword,
	changePassword,
	changeEmail,
	deleteAccount,
	token,
	logout,
} = require("../controllers/auth")

// routes
router.post("/login", login)
router.post("/signup", signup)
router.patch("/change-password", verifyToken, changePassword)
router.patch("/change-email", verifyToken, changeEmail)
router.patch("/change-forget-password", changeForgetPassword)
router.post("/delete-account", verifyToken, deleteAccount)
router.post("/logout", verifyToken, logout)

// for token
router.post("/token", token)

module.exports = router
