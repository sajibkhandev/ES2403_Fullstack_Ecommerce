const cloudinaryMiddlewar = require('../middlewars/cloudinary');
let Product=require('../models/productSchema')


let addProductController=async(req,res)=>{
    let {name,des,image,saleprice,regularprice,slug}=req.body
    // console.log(req.file.path);

    let imageUrl= await cloudinaryMiddlewar(req.file.path)
    console.log(imageUrl.secure_url);
    
    

    let existingProduct= await Product.find({name:name})
    if(existingProduct.length>0){
        res.send({error:"Product existed"})
    }else{
        let product=new Product({
            name,
            des,
            image:imageUrl.secure_url,
            saleprice,
            regularprice
            ,slug

        })
        product.save()
        res.send({success:"Product Created"})
    }
  
    
    
    

}
module.exports=addProductController