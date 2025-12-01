let Product=require('../models/productSchema')


let addProductController=async(req,res)=>{
    let {name,des,image,saleprice,regularprice,slug}=req.body

    let existingProduct= await Product.find({name:name})

    if(existingProduct.length>0){
        res.send({error:"Product existed"})
    }else{
        let product=new Product({
            name,
            des,
            image,
            saleprice,
            regularprice
            ,slug

        })
        product.save()
        res.send({success:"Product Created"})
    }
  
    
    
    

}
module.exports=addProductController