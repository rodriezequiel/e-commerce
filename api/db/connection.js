const { Sequelize } = require('sequelize')

//Para Julian que es un choto y usa windows
const db = new Sequelize('postgres://postgres:8712@localhost:5432/ecommerce', {
  logging: false,
})
// para Linux usar ESTA!
// const sequelize = new Sequelize(
//   'postgres://localhost:5432/ecommerce'
// )

module.exports = db
