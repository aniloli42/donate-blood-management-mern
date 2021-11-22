const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")
const fetchUser = require("../middleware/fetchUser")

const {
	getHistory,
	createHistory,
	updateHistory,
	deleteHistory,
} = require("./../controllers/history")

router.post("/", verifyToken, fetchUser, getHistory)
router.post("/create", verifyToken, fetchUser, createHistory)
router.patch("/update", verifyToken, fetchUser, updateHistory)
router.post("/delete", verifyToken, fetchUser, deleteHistory)

module.exports = router
