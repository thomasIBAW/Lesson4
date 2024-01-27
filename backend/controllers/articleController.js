import {
    createArticle,
    removeArticle,
    updateArticle,
    getArticles,
    getArticle
  } from '../services/article.js'
  
  export const get = async (req, res, next) => {
    try {
      const article = await getArticle(req.params.id)
      res.send(article)
    } catch (err) {
      res.send(err)
      console.error(err)
      next()
    }
  }
  
  export const list = async (req, res, next) => {
    try {
      const articles = await getArticles()
      res.send(articles)
    } catch (err) {
      res.send(err)
      console.error(err)
      next()
    }
  }
  
  export const create = async (req, res, next) => {
    try {
      const article = await createArticle(req.body)
      res.send(article)
    } catch (err) {
      res.send(err)
      console.error(err)
      next()
    }
  }
  
  export const update = async (req, res, next) => {
    try {
      const result = await updateArticle(req.params.id, req.body)
      res.send(result)
    } catch (err) {
      res.send(err)
      console.error(err)
      next()
    }
  }
  
  export const remove = async (req, res, next) => {
    try {
      const result = await removeArticle(req.params.id)
      res.send(result)
    } catch (err) {
      res.send(err)
      console.error(err)
      next()
    }
  }
  