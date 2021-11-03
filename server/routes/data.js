const express = require("express")
const router = express.Router()

const { getData } = require("../controllers/data")

// routes
router.get("/", getData)

module.exports = router
