const express = require('express')
const router = express.Router()

// import
const { sendOTP, verifyOTP } = require('./../controllers/otp.js')

router.post('/create', sendOTP)
router.post('/verify', verifyOTP)

module.exports = router
