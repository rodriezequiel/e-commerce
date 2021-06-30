const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/connection')

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
  }
)

module.exports = User
