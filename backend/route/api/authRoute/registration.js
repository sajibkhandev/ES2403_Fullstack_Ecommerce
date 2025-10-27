const express =require('express')
const _=express.Router()
const registrationController = require('../../../controllers/registrationController')
const loginController = require('../../../controllers/loginController')
const secureApi = require('../../../middlewars/secureApi')

_.post('/registration',secureApi,registrationController)




module.exports=_