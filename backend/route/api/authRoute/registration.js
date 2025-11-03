const express =require('express')
const _=express.Router()
const registrationController = require('../../../controllers/registrationController')
const loginController = require('../../../controllers/loginController')
const secureApi = require('../../../middlewars/secureApi')
const otpController = require('../../../controllers/otpController')

_.post('/registration',secureApi,registrationController)
_.post('/otp',otpController)




module.exports=_