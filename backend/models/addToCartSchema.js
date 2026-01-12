const mongoose = require('mongoose');
const { Schema }=mongoose

const addToCartSchema=new Schema({
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
       
    },
    cartOwnerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Userlist"
    }
    ,
    quantity:{
        type:Number
    }
   
   

    
})
module.exports=mongoose.model("Cart",addToCartSchema)