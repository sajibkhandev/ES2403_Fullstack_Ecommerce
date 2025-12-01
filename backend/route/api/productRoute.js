const express =require('express')
const _=express.Router()
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryControlle = require('../../controllers/viewCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const addProductController = require('../../controllers/addProductController')


_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)
_.post('/addproduct',addProductController)




_.get('/viewcategory',viewCategoryControlle)
_.get('/viewsubcategory',viewSubCategoryController)





module.exports=_