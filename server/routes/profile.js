const express = require("express")
const fetchUser = require("../middleware/fetchUser")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

const {
	getProfile,
	updateProfile,
	getStatus,
} = require("./../controllers/profile")

router.post("/", verifyToken, getProfile)
router.post("/status", verifyToken, fetchUser, getStatus)

// updateing
router.patch("/update", verifyToken, updateProfile)

module.exports = router
