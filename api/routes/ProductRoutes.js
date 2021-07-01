const express = require('express')
const router = express.Router()
const Cart = require('../db/CartModels')
const Product = require('../db/ProductModels')
const User = require('../db/UserModels')
const CartItems = require('../db/CartItemsModels')

router.get('/all', (req, res) => {
  const filteredProducts = {}
  Product.findAll().then((products) => {
    products.map((product) => {
      if (filteredProducts[product.name])
        filteredProducts[product.name].push(product)
    })
  })
})
router.get('/single/:id', (req, res) => {
  Product.findOne(req.params.id).then((product) => res.send(product))
})

module.exports = router
