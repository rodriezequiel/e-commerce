const express = require('express')
const router = express.Router()
const Cart = require('../db/CartModels')
const Product = require('../db/ProductModels')
const User = require('../db/UserModels')
const CartItems = require('../db/CartItemsModels')
const Category = require('../db/CategoryModels')

// PREGUNTAR ????

router.get('/all', (req, res) => {
  const filteredProducts = {}
  // Product.findAll().then((products) => res.send(products))
  Product.findAll({ include: Category })
    .then((products) => {
      products.map((product) => {
        if (filteredProducts[product.name])
          filteredProducts[product.name].push(product)
        else {
          filteredProducts[product.name] = [product]
        }
      })
    })
    .then(() => res.send(filteredProducts))
})

router.get('/single/:name', (req, res) => {
  Product.findAll({ where: { name: req.params.name } }).then((product) =>
    res.send(product)
  )
})

module.exports = router
