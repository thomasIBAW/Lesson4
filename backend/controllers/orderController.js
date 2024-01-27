import { getOrder, getOrders, createOrder } from '../services/order.js'

export const get = async (req, res, next) => {
  try {
    const cart = await getOrder()
    res.send(cart)
  } catch (error) {
    res.send(error)
    next()
  }
}

export const add = async (req, res, next) => {
  try {
    const result = await createOrder(req.body)
    res.send(result)
  } catch (error) {
    res.send(error)
    next()
  }
}

export const remove = async (req, res, next) => {}
