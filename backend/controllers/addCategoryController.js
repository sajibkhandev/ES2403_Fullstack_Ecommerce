let Category=require('../models/categorySchema')


let addCategoryController=async(req,res)=>{
    let {name,ownerId}=req.body
    console.log(name);
    console.log(ownerId);

 let existingCategory= await Category.findOne({name:name})
 
 if(existingCategory){
    res.send({error:"Category Already User"})
 }else{
    let category=new Category({
        name:name,
        ownerId:ownerId
    })
    category.save()
    res.send({success:"Category has been Created"})
 }

    
    
    

}
module.exports=addCategoryController