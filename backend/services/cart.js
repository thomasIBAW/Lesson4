import mongoose from 'mongoose'
import CartItem from '../models/cartModel.js'
import {getArticle} from './article.js'

export async function getCartData() {
    const cart = await CartItem.find().populate('articleData')

    let amount = 0
    cart.forEach(item => {
        amount += parseFloat(item.price * 100) * item.quantity
    })

    amount = (amount / 100).toFixed(2)

    return {items: cart, totalAmount: amount, count: cart.length}
}

export async function addToCart(_id) {
    const article = await getArticle(_id)
    return CartItem.findOneAndUpdate(
        {articleData: article._id},
        {$inc: {quantity: 1}, price: article.price},
        {upsert: true}
    )
}

export async function removeFromCart(_id) {
    return CartItem.findOneAndDelete({articleData: _id})
}
