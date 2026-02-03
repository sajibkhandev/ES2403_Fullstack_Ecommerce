const Product=require('../models/productSchema')
const viewSingleProController=async(req,res)=>{
    let product=await Product.find({_id:req.params.id})
   
    res.send(product)
    
    // console.log(req.params.id);

    

}
module.exports=viewSingleProController