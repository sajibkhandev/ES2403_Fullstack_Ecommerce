
const registrationController=(req,res)=>{
   
    let {username,email,password}=req.body
  
   if(!username){
    res.send({error:"Please give your username",});
    
   }else if(!email){
    res.send({error:"Please give your email"});

   }else if(!password){
      res.send({error:"Please give your password"});

   }else{
    console.log("All done");
    
   }
   
   



}

module.exports=registrationController