const express = require("express")
const router = express.Router()

const {
	createRequests,
	fetchOwnRequests,
	fetchRequests,
	deleteRequests,
} = require("../controllers/requests")

const fetchUser = require("../middleware/fetchUser")
const tokenVerify = require("../middleware/tokenVerify")

/*========
	routes
========*/

// create
router.post("/own-requests/create", tokenVerify, fetchUser, createRequests)

// Fetching
router.post("/own-requests", tokenVerify, fetchUser, fetchOwnRequests)
router.post("/other-requests", tokenVerify, fetchRequests)

// delete
router.delete(
	"/own-requests/:requestId",
	tokenVerify,
	fetchUser,
	deleteRequests
)

module.exports = router
