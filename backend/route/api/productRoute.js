const express =require('express')
const _=express.Router()
const addCategoryController = require('../../controllers/addCategoryController')


_.post('/addcategory',addCategoryController)





module.exports=_