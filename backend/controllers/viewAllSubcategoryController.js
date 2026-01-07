const SubCategory=require('../models/subCategorySchema')

const viewAllSubcategoryController=async (req,res)=>{
    // console.log(req.query.slug);
    


    let subcategory=await SubCategory.find({categoryId:req.query.slug})
    res.send(subcategory)
   
    

}
module.exports=viewAllSubcategoryController