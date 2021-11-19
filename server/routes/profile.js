const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")

const { getProfile } = require("./../controllers/profile")

router.post("/", verifyToken, getProfile)

module.exports = router
