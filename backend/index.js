require('dotenv').config()
const express = require('express')
const route  = require('./route')
const mongodbConfig = require('./dbConfig/mongodbConfig')
const app = express()
const port = 3000


mongodbConfig()


app.use(express.json())
app.use(route)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
