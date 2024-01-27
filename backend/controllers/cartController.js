import { getCartData, addToCart, removeFromCart } from '../services/cart.js'

export const getCart = async (req, res, next) => {
  try {
    res.send(await getCartData())
  } catch (error) {
    res.send(error)
    next()
  }
}

export const addItem = async (req, res, next) => {
  try {
    console.log('add')
    await addToCart(req.params.id)
    res.send(await getCartData())
  } catch (error) {
    res.send(error)
    next()
  }
}

export const removeItem = async (req, res, next) => {
  try {
    await removeFromCart(req.params.id)
    res.send(await getCartData())
  } catch (error) {
    res.send(error)
    next()
  }
}
