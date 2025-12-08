require('dotenv').config()
const express = require('express')
const app = express()
const route  = require('./route')
const cors =require('cors')
const mongodbConfig = require('./dbConfig/mongodbConfig')
const port = 8000
const path =require('path')


mongodbConfig()


app.use(cors())
app.use(express.json())
app.use(route)
app.use('/uploads',express.static(path.join(__dirname,"uploads")))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
