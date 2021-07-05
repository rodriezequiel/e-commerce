const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Product = require("../db/ProductModels");
const User = require("../db/UserModels");
const Order = require("../db/OrderModels");

//authentication middleware
const authAdmin = (req, res, next) => {
  const token = req.cookies.access;

  if (token) {
    jwt.verify(token, "$2b$10$/skdhli/rZNMa9uRsSOdX.", (err, data) => {
      if (err) return res.sendStatus(403);
      if(data.isAdmin) next();
      else res.sendStatus(401);
    });
  }else{
    res.sendStatus(401)
  }
};

router.use(authAdmin);
//find all carts
router.get("/allproducts", (req, res) => {
  Product.findAll().then(products => res.send(products));
});
router.get("/allusers", (req, res) => {
  User.findAll().then(products => res.send(products));
});
router.put("/update", (req, res) => {
  Product.update(req.body, { where: { id: req.body.id } }).then(products => res.send(products));
});
router.put("/updateuser", (req, res) => {
  User.update(req.body, { where: { id: req.body.id } }).then(users => res.send(users));
});

router.post("/add", (req, res) => {
  Product.create(req.body).then(product => res.send(product));
});
router.post("/adduser", (req, res) => {
  User.create(req.body).then(product => res.send(product));
});
router.delete("/delete", (req, res) => {
  const productsToRemove = req.body;
  productsToRemove.map(product =>
    Product.destroy({ where: { id: product.id } })
      .then(product => res.sendStatus(200))
      .catch(err => console.log(err))
  );
});
router.delete("/deleteuser", (req, res) => {
  const usersToRemove = req.body;
  usersToRemove.map(user =>
    User.destroy({ where: { id: user.id } })
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  );
});

router.get("/getorders", (req, res) => {
  Order.findAll().then(order => res.send(order));
});
router.get("/deleteorder", (req, res) => {
  const orderToRemove = req.body;
  orderToRemove.map(order =>
    Order.destroy({ where: { id: order.id } })
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
  );
});
router.get("/updateorder", (req, res) => {
  Order.update(req.body, { where: { id: req.body.id } }).then(orders => res.send(orders));
});

module.exports = router;
