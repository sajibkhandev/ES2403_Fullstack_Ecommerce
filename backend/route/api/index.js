const express =require('express')
const _=express.Router()
const AuthRoute =require('./authRoute')

_.use('/authentication',AuthRoute)


module.exports=_