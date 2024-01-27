import mongoose from 'mongoose'
import Order from '../models/order.js'

export async function getOrder (_id) {
  return await Order.find(_id)
}

export async function getOrders () {
  return await Order.find({})
}

export async function createOrder (article) {
  return Order.create(article)
}
