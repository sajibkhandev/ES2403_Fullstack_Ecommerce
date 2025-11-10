const Userlist=require('../models/userSchema')
const bcrypt = require('bcrypt');

const changePasswordController = async (req, res) => {
    let {email,newpassword}=req.body
    let existinguser=await Userlist.findOne({email:email})
    // console.log(existinguser);




    bcrypt.hash(newpassword, 10, async function(err, hash) {
     if(existinguser){
        await Userlist.findOneAndUpdate({email:email},{password:hash})
        res.send({success:"Reset Password"})

    }else{
         res.send({error:"Creditial inviled"})
        
    }
});
    

}

module.exports = changePasswordController