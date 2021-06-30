const express = require('express')
const router = express.Router()
const Cart = require('../db/CartModels')
const Product = require('../db/ProductModels')
const User = require('../db/UserModels')
const CartItems = require('../db/CartItemsModels')

router.get('/', (req, res) => {
  Product.findAll().then((products) => res.send(products))
})

module.exports = router
