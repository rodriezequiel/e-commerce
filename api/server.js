
const express = require("express");
const routes = require('./routes/index')
const volleyball = require('volleyball');
const cors = require('cors')

const models = require("./db/index");
const db = require("./db/connection");

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.use(volleyball);
app.use(express.json());

// app.use(express.urlencoded{extend:})
app.use('/api', routes);

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`)
  })
})
