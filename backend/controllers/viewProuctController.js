const Product=require('../models/productSchema')

const viewProuctController=async (req,res)=>{

    let product=await Product.find({})
    res.send(product)
   
    

}
module.exports=viewProuctController