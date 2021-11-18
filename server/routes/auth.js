const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

// Importing the controller
const {
	login,
	signup,
	changePassword,
	deleteAccount,
} = require("../controllers/auth")

// routes
router.post("/login", login)
router.post("/signup", signup)
router.patch("/change-password", changePassword)
router.delete("/delete-account", verifyToken, deleteAccount)

module.exports = router
