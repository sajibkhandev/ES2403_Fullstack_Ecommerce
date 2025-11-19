const express =require('express')
const _=express.Router()
const AuthRoute =require('./authRoute')
const ProductRoute =require('./productRoute')

_.use('/authentication',AuthRoute)
_.use('/product',ProductRoute)


module.exports=_