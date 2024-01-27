import express from 'express'
import {
  getCart,
  addItem,
  removeItem
} from '../controllers/cartController.js'

const router = express.Router()

router.get('/cart', getCart)
router.post('/cart/article/:id', addItem)
router.delete('/cart/article/:id', removeItem)

export default router
