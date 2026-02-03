const mongoose = require('mongoose');
const { Schema }=mongoose

const addDiscountSchema=new Schema({
    discountname:{
        type:String,
        required: true,
        unique: true
       
    },
    discountamount:{
        type:Number,
    },
    discounttype:{
        type:String,
    },
    discountrange:{
        type:String
    }
    
})
module.exports=mongoose.model("Discount",addDiscountSchema)