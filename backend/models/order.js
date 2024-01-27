import mongoose from 'mongoose'
const { Schema } = mongoose

const orderSchema = new Schema(
  {
    user: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      street: {
        type: String,
        required: true
      },
      postcode: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      email: {
        type: String
      }
    },
    orderPositions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'cart'
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model('order', orderSchema, 'order')
