const secureApi=(req,res,next)=>{
    
    if(req.headers.authorization==process.env.AUTH_KEY){
       next()
    }else{
        res.send({error:"Authentication Failed"})
    }
    

}
module.exports=secureApi