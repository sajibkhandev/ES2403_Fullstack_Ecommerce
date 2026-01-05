const SubCategory=require('../models/subCategorySchema')

const viewAllSubcategoryController=async (req,res)=>{


    let subcategory=await SubCategory.find({categoryId:"691de382fb99541cd3a22cb8"})
    res.send(subcategory)
   
    

}
module.exports=viewAllSubcategoryController