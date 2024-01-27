import express from 'express'
import { get, add, remove } from '../controllers/orderController.js'

const router = express.Router()

router.get('/order', get)
router.post('/order', add)
// router.delete('/order/:id', remove)

export default router
