import express from 'express'
import {
  createRequest,
  deleteRequest,
  getRequest,
  otherRequest,
  ownRequest,
  recentRequest,
  updateRequest
} from '../controllers/requests.js'
import fetchUser from '../middleware/fetchUser.js'
import tokenVerify from '../middleware/tokenVerify.js'

const router = express.Router()
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

export default router
