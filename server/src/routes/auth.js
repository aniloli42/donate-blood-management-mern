import express from 'express'
import {
  changeEmail,
  changeForgetPassword,
  changePassword,
  deleteAccount,
  login,
  logout,
  signup,
  token
} from '../controllers/auth.js'
import verifyToken from '../middleware/tokenVerify.js'

const router = express.Router()
// routes
router.post('/login', login)
router.post('/signup', signup)
router.patch('/change-password', verifyToken, changePassword)
router.patch('/change-email', verifyToken, changeEmail)
router.patch('/change-forget-password', changeForgetPassword)
router.post('/delete-account', verifyToken, deleteAccount)
router.post('/logout', verifyToken, logout)
router.post('/token', token)

export default router
