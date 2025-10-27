require('dotenv').config()
const express = require('express')
const app = express()
const route  = require('./route')
const cors =require('cors')
const mongodbConfig = require('./dbConfig/mongodbConfig')
const port = 3000


mongodbConfig()


app.use(cors())
app.use(express.json())
app.use(route)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
