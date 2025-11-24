const Catagory=require('../models/categorySchema')

const viewCategoryControlle=async (req,res)=>{

    let category=await Catagory.find({})
    res.send(category)
   
    

}
module.exports=viewCategoryControlle