const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/tokenVerify")
const fetchUser = require("../middleware/fetchUser")

const {
	getHistory,
	getHistorys,
	createHistory,
	updateHistory,
	deleteHistory,
} = require("./../controllers/history")

router.get("/:id", verifyToken, fetchUser, getHistory)
router.post("/", verifyToken, fetchUser, getHistorys)
router.post("/create", verifyToken, fetchUser, createHistory)
router.patch("/update/:id", verifyToken, fetchUser, updateHistory)
router.delete("/delete/:id", verifyToken, fetchUser, deleteHistory)

module.exports = router
