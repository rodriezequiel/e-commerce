const express = require('express')
const router = express.Router()
const Cart = require('../db/CartModels')
const Product = require('../db/ProductModels')
const User = require('../db/UserModels')
const CartItems = require('../db/CartItemsModels')

router.get('/all', (req, res) => {
  const filteredProducts = {}
  let imgProduct = []
  // Product.findAll().then((products) => res.send(products))
  Product.findAll()
    .then((products) => {
      console.log(products)
      products.map((product) => {
        if (filteredProducts[product.name])
          filteredProducts[product.name].push(product)
        else {
          filteredProducts[product.name] = [product]
          imgProduct = [...imgProduct, product.picture[0]]
        }
      })
    })
    .then(() => res.send([filteredProducts, imgProduct]))
})

router.get('/single/:name', (req, res) => {
  Product.findAll({ where: { name: req.params.name } }).then((product) =>
    res.send(product)
  )
})

module.exports = router
