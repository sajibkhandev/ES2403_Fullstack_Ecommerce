const express =require('express')
const _=express.Router()
const registrationController = require('../../controllers/registrationController')
const loginController = require('../../controllers/loginController')
const secureApi = require('../../middlewars/secureApi')
const otpController = require('../../controllers/otpController')
const forgetPasswordController = require('../../controllers/forgetPasswordController')
const changePasswordController = require('../../controllers/changePasswordController')

_.post('/registration',secureApi,registrationController)
_.post('/otp',otpController)
_.post('/forgetpassword',forgetPasswordController)
_.post('/changepassword',changePasswordController)
_.post('/login',loginController)




module.exports=_