let authMiddlewar=(req,res,next)=>{
    if(req.session.isAuth){
        next()
    }else{
        res.send({error:"Unauthorized User"})
    }

}
module.exports=authMiddlewar