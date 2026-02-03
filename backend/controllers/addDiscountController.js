let Discount=require('../models/addDiscountSchema')


let addDiscountController=async(req,res)=>{
    let {discountname,discountamount,discounttype,discountrange}=req.body
   
    

    let exisitingDiscount=await Discount.find({discountname:discountname})

   if(exisitingDiscount.length>0){
     res.send({error:"Discount neme exisited"})
   }else if(discountamount>100){
         if(discounttype=="percentage"){
             res.send({error:"invalid discount"})

         }
   }else if(discountamount>50){
          if(discounttype=="delivery"){
            res.send({error:"invalid discount"})

          }
   }else{
    let discount=new Discount({
        discountname,
        discountamount,
        discounttype,
        discountrange

    })
    discount.save()
    res.send({success:"Discount Created"})
   }
    

}
module.exports=addDiscountController