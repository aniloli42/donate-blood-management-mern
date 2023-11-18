import express from 'express'
import fetchUser from '../middleware/fetchUser.js'
import verifyToken from '../middleware/tokenVerify.js'
import {
  getProfile,
  getStatus,
  updateProfile
} from './../controllers/profile.js'

const router = express.Router()

router.get('/', verifyToken, getProfile)
router.get('/status', verifyToken, fetchUser, getStatus)
router.patch('/update', verifyToken, updateProfile)

export default router
