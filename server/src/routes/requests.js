const express = require('express')
const router = express.Router()

const {
  getRequest,
  createRequest,
  ownRequest,
  otherRequest,
  updateRequest,
  deleteRequest,
  recentRequest,
} = require('../controllers/requests')

const fetchUser = require('../middleware/fetchUser')
const tokenVerify = require('../middleware/tokenVerify')

/*========
	routes
========*/
router.get('/own/:id', tokenVerify, fetchUser, getRequest)
router.get('/own', tokenVerify, fetchUser, ownRequest)
router.get('/other', tokenVerify, fetchUser, otherRequest)
router.get('/recent', tokenVerify, fetchUser, recentRequest)
router.post('/create', tokenVerify, fetchUser, createRequest)
router.patch('/update/:id', tokenVerify, fetchUser, updateRequest)
router.delete('/delete/:id', tokenVerify, fetchUser, deleteRequest)

module.exports = router
