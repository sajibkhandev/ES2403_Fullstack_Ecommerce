let Cart=require('../models/addToCartSchema')


let addAddToCartController=async(req,res)=>{
    let { cartId,cartOwnerId,quantity}=req.body
    // console.log(req.query.type);
    

    let exisitingCart= await Cart.find({cartId:cartId})
    if(exisitingCart.length>0){
        res.send({error:"Cart Exisited"})
        console.log(exisitingCart[0].quantity);

        if(req.query.type=="increment"){
            
        await Cart.findOneAndUpdate({_id:exisitingCart[0]._id},{quantity:exisitingCart[0].quantity+quantity},{new:true})

        }else if(req.query.type=="decrement"){
            if(exisitingCart[0].quantity>1){
                 await Cart.findOneAndUpdate({_id:exisitingCart[0]._id},{quantity:exisitingCart[0].quantity-quantity},{new:true})
            }

        }

       


        
    }else{
        let cart=new Cart({
            cartId,
            cartOwnerId,
            quantity
        })
        cart.save()
        res.send({sussess:"Cart Created"})
    }
  

}
module.exports=addAddToCartController