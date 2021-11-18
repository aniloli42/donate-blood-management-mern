const express = require("express")
const router = express.Router()

const {
	createRequests,
	fetchOwnRequests,
	fetchOthersRequests,
	deleteRequests,
} = require("../controllers/requests")

const tokenVerify = require("../middleware/tokenVerify")

/*========
	routes
========*/

// create
router.post("/own-requests/create", tokenVerify, createRequests)

// Fetching
router.post("/own-requests", tokenVerify, fetchOwnRequests)
router.post("/other-requests", tokenVerify, fetchOthersRequests)

// delete
router.delete("/own-requests/:requestId", tokenVerify, deleteRequests)

module.exports = router
