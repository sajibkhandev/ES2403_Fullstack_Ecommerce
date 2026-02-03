let logoutController =(req,res)=>{
    req.session.destroy(function(err) {
        if(err){
            res.send({error:"Something is wrong"})
        }else{
            res.send({success:"logout successfully"})
        }
  
})

}
module.exports =logoutController