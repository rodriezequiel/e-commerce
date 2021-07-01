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
