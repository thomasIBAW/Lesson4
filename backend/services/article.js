import mongoose from 'mongoose'
import Article from '../models/articleModel.js'

export async function getArticles () {
  return Article.find()
}

export async function getArticle (id) {
  return Article.findById(id)
}

export async function createArticle (newArticle) {
  return Article.create(newArticle)
}

export async function updateArticle (id, updatedArticle) {
  return Article.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(id) },
    updatedArticle,
    {
      new: true
    }
  )
}

export async function removeArticle (id) {
  return Article.findByIdAndDelete(id)
}
