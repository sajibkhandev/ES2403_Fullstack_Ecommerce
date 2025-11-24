const express =require('express')
const _=express.Router()
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryControlle = require('../../controllers/viewCategoryController')


_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)




_.get('/viewcategory',viewCategoryControlle)





module.exports=_