const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

const { getProfile, updateProfile } = require("./../controllers/profile")

router.post("/", verifyToken, getProfile)

// updateing
router.patch("/update", verifyToken, updateProfile)

module.exports = router
