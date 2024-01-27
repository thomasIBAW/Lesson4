import mongoose from "mongoose";

const Schema = mongoose.Schema;


export const articleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    active: {
      type: String,
      default: true
    },
    price: {
        type: Number,
        required: true
    },
    image: String,
    reviews: [
      {
        title: String,
        description: String,
        rating: Number
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model('article', articleSchema, 'article')

