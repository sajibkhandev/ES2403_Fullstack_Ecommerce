const Userlist=require('../models/userSchema')

const otpController = async (req, res) => {
    let {email,otp}=req.body

    let existingUser=await Userlist.findOne({email:email})
    // console.log(existingUser);
   
    if(existingUser){


        if(!existingUser.emailVerification && existingUser.otp==otp){
            await Userlist.findOneAndUpdate({email:email},{otp:"",emailVerification:true})
            res.send("otp match");
        }else{
             res.send("otp not match");
        }
    }else{
        res.send("Credintial Account");
        
       
    }

}

module.exports = otpController