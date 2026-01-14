const express =require('express')
const multer  = require('multer')

const _=express.Router()
const addCategoryController = require('../../controllers/addCategoryController')
const addSubCategoryController = require('../../controllers/addSubCategoryController')
const viewCategoryControlle = require('../../controllers/viewCategoryController')
const viewSubCategoryController = require('../../controllers/viewSubCategoryController')
const addProductController = require('../../controllers/addProductController')
const addVeriantController = require('../../controllers/addVeriantController')
const viewProuctController = require('../../controllers/viewProuctController')
const viewAllSubcategoryController = require('../../controllers/viewAllSubcategoryController')
const addAddToCartController = require('../../controllers/addAddToCartController')
const viewAddToCartController = require('../../controllers/viewAddToCartController')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
    // console.log(file.originalname);
    
  }
})

const upload = multer({ storage: storage })



_.post('/addcategory',addCategoryController)
_.post('/addsubcategory',addSubCategoryController)
_.post('/addproduct',upload.single('image'),addProductController)
_.post('/addveriant',upload.single('image'),addVeriantController)
_.post('/addaddtocart',addAddToCartController)




_.get('/viewcategory',viewCategoryControlle)
_.get('/viewsubcategory',viewSubCategoryController)
_.get('/viewproduct',viewProuctController)
_.get('/viewallsubcategory',viewAllSubcategoryController)
_.get('/viewaddtocart',viewAddToCartController)





module.exports=_