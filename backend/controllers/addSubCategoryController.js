let Subcategory=require('../models/subCategorySchema')
let Category=require('../models/categorySchema')


let addSubCategoryController=async(req,res)=>{
    let {name,ownerId,categoryId}=req.body
    console.log(name,ownerId,categoryId);

   let existingSubcategory= await Subcategory.findOne({name:name})

   if(existingSubcategory){
    res.send({error:"Already Existed"})
   }else{
    let subcategory=new Subcategory({
        name:name,
        ownerId:ownerId,
        categoryId:categoryId
        
    })
    subcategory.save()
    res.send({success:"SubCategory has been Created"})

    await Category.findOneAndUpdate({_id:categoryId},{ $push: { subcategorylist: subcategory._id} })






   }


    
   

 

    
    
    

}
module.exports=addSubCategoryController