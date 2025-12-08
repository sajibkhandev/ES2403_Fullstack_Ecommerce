let Product=require('../models/productSchema')


let addProductController=async(req,res)=>{
    let {name,des,image,saleprice,regularprice,slug}=req.body
    // console.log(req.file.filename);
    

    let existingProduct= await Product.find({name:name})
    if(existingProduct.length>0){
        res.send({error:"Product existed"})
    }else{
        let product=new Product({
            name,
            des,
            image:`/uploads/${req.file.filename}`,
            saleprice,
            regularprice
            ,slug

        })
        product.save()
        res.send({success:"Product Created"})
    }
  
    
    
    

}
module.exports=addProductController