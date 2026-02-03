const express =require('express')
const _=express.Router()
const registrationController = require('../../controllers/registrationController')
const loginController = require('../../controllers/loginController')
const secureApi = require('../../middlewars/secureApi')
const otpController = require('../../controllers/otpController')
const forgetPasswordController = require('../../controllers/forgetPasswordController')
const changePasswordController = require('../../controllers/changePasswordController')
const logoutController = require('../../controllers/logoutController')
const dashboardController = require('../../controllers/dashboardController')
const authMiddlewar = require('../../middlewars/authMiddlewar')


_.post('/registration',secureApi,registrationController)
_.post('/otp',otpController)
_.post('/forgetpassword',forgetPasswordController)
_.post('/changepassword',changePasswordController)
_.post('/login',loginController)
_.post('/logout',logoutController)
_.get('/dashboard',authMiddlewar,dashboardController)






module.exports=_