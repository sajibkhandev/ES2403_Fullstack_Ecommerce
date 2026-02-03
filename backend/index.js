require('dotenv').config()
const express = require('express')
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const app = express()
const route  = require('./route')
const cors =require('cors')
const mongodbConfig = require('./dbConfig/mongodbConfig')
const port = 8000
const path =require('path')


mongodbConfig()


app.use(cors())
app.use(express.json())
const store = new MongoDBStore({
  uri: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ql3v7el.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`,
  collection: 'mySessions'
});

app.use(session({
  secret: 'EsMern2403',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  store: store,
}))

app.use(route)
app.use('/uploads',express.static(path.join(__dirname,"uploads")))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
