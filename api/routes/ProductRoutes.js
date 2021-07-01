<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Cart = require("../db/CartModels");
const Product = require("../db/ProductModels");
const User = require("../db/UserModels");
const CartItems = require("../db/CartItemsModels");
const Category = require("../db/CategoryModels");

router.get("/all", (req, res) => {
  Product.findAll().then((products) => res.send(products));
});

router.get("/single/:id", (req, res) => {
  let id = req.params.id;
  Product.findByPk(id).then((product) => res.send(product));
});

router.get("/allcategory", (req, res) => {
  Category.findAll().then((cartegorys) => res.send(cartegorys));
});

module.exports = router;
=======
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
>>>>>>> 25cff5afb0e33eac7eb8f1878b4cc4b7a9ce35b9
