let Veriant=require('../models/veriantSchema')
let Product=require('../models/productSchema')


let addVeriantController=async(req,res)=>{
    let {name,des,image,saleprice,regularprice,slug}=req.body
    // console.log(req.file.filename);
    

    let exisitingProduct= await Product.find({name:name})
    console.log(exisitingProduct.length==0);
    






    if(exisitingProduct.length==0){
        res.send({error:"Product is not ableale"})
    }else{
        let veriant=new Veriant({
            name,
            des,
            image:`/uploads/${req.file.filename}`,
            saleprice,
            regularprice
            ,slug

        })
        veriant.save()
        res.send({success:"Veriant Created"})
    }
  
    
    
    

}
module.exports=addVeriantController