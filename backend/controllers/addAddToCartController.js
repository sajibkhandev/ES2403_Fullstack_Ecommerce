let Cart=require('../models/addToCartSchema')


let addAddToCartController=async(req,res)=>{
    let { cartId,cartOwnerId,quantity}=req.body

    let exisitingCart= await Cart.find({cartId:cartId})
    if(exisitingCart.length>0){
        res.send({error:"Cart Exisited"})
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