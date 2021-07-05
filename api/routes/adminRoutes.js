const express = require('express')
const router = express.Router()
const Cart = require('../db/CartModels')
const Product = require('../db/ProductModels')
const User = require('../db/UserModels')
const CartItems = require('../db/CartItemsModels')

//find all carts
router.get('/allproducts', (req, res) => {
  Product.findAll().then((products) => res.send(products))
})
router.put('/update', (req, res) => {
  Product.update(req.body, { where: { id: req.body.id } }).then((products) =>
    res.send(products)
  )
})

router.post('/add', (req, res) => {
  Product.create(req.body).then((product) => res.send(product))
})

module.exports = router
