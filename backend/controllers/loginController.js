const Userlist=require('../models/userSchema')
const bcrypt = require('bcrypt');
const loginController=async (req,res)=>{
   let {email,password}=req.body
  


   let existinguser=await Userlist.findOne({email:email})
   
   if(existinguser){

      console.log(existinguser);



      bcrypt.compare(password, existinguser.password, function(err, result) {
    // result == true
     if(result){
        res.send({
         username:existinguser.username,
         email:existinguser.email,
         emailVerification:existinguser.emailVerification,
         role:existinguser.role,
         id:existinguser._id
         


        })
      }else{
        res.send({error:"Creditial Inviled"})

     }
    
});

      

   }else{
      res.send({error:"Creditial Inviled"})
   }
   
   
   

  
    

}
module.exports=loginController