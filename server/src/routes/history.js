import express from 'express'
import fetchUser from '../middleware/fetchUser.js'
import verifyToken from '../middleware/tokenVerify.js'
import {
  createHistory,
  deleteHistory,
  getHistories,
  getHistory,
  updateHistory
} from './../controllers/history.js'

const router = express.Router()

router.get('/:id', verifyToken, fetchUser, getHistory)
router.get('/', verifyToken, fetchUser, getHistories)
router.post('/create', verifyToken, fetchUser, createHistory)
router.patch('/update/:id', verifyToken, fetchUser, updateHistory)
router.delete('/delete/:id', verifyToken, fetchUser, deleteHistory)

export default router
