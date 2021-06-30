const db = require('./db/connection')
const express = require('express')

const { User, Product, Order, Cart } = require('./db/index')
const { Op } = require('sequelize')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const productRoutes = require('./routes/ProductRoutes')

const app = express()
const port = 3001

app.use(express.json())
// app.use(express.urlencoded{extend:})

app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/products', productRoutes)

app.get('/users', (req, res) => {
  User.findAll().then((users) => res.send(users))
})
app.get('/products', (req, res) => {
  Product.findAll().then((products) => res.send(products))
})

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`)
  })
})
