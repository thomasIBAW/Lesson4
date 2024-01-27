import express from 'express'
import {
  get,
  create,
  list,
  update,
  remove
} from '../controllers/articleController.js'

const router = express.Router()

router.get('/:id', get)
router.get('/', list)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
