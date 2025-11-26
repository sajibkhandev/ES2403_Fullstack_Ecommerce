const Subcatagory=require('../models/subCategorySchema')

const viewSubCategoryController=async (req,res)=>{

    let subcategory=await Subcatagory.find({}).populate("categoryId")
    res.send(subcategory)
   
    

}
module.exports=viewSubCategoryController