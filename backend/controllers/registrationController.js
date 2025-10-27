const emailRegex = require("../helpers/emailRegex");
const Userlist=require('../models/userSchema')

const registrationController=(req,res)=>{
   
    let {username,email,password}=req.body

   
    
  
   if(!username){
    res.send({error:"Please give your username",});
    
   }else if(!email){
    res.send({error:"Please give your email"});

   }else if(!emailRegex(email)){
      res.send({error:"Please give a valid Email"});
   }
   else if(!password){
      res.send({error:"Please give your password"});
   }
   else{
      
      let data=new Userlist({
         username,
         email,
         password
      })
      data.save()
      res.send(data);
      
      
     
    
   }



}

module.exports=registrationController