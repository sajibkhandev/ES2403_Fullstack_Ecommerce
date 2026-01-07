const Catagory=require('../models/categorySchema')

const viewCategoryControlle=async (req,res)=>{

    let category=await Catagory.find({}).populate("subcategorylist")
    res.send(category)
   
    

}
module.exports=viewCategoryControlle