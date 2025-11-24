const mongoose = require('mongoose');
const { Schema }=mongoose

const subCategorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Userlist"
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    
   

    
})
module.exports=mongoose.model("Subcategory",subCategorySchema)