const router = require('express').Router();

router.use("/cart", require("./cartRoutes"));
router.use("/order", require("./orderRoutes"));
router.use("/products", require("./ProductRoutes"));
router.use("/auth", require("./auth"));

module.exports = router;