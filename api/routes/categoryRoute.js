const express = require("express");
const router = express.Router();
const Cart = require("../db/CartModels");
const Product = require("../db/ProductModels");
const User = require("../db/UserModels");
const CartItems = require("../db/CartItemsModels");
const Category = require("../db/CategoryModels");
const { route } = require("./adminRoutes");

router.get("/", (req, res) => {
  Category.findAll().then((category) => res.send(category));
});

router.post("/", (req, res) => {
  const categoryName = req.body.name;
  Category.findOrCreate({
    where: { name: categoryName },
    defaults: { name: categoryName },
  }).then((category) => {
    console.log(category[0]);
    res.sendStatus(200);
  });
});

router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id).then((category) => res.send(category));
});

router.delete("/", (req, res) => {
  Category.destroy({
    where: {
      name: req.body.name,
    },
  }).then(() => res.sendStatus(200));
});

module.exports = router;
