
const cloudinary = require('cloudinary').v2
const fs=require('fs')

 cloudinary.config({ 
        cloud_name: 'dr116ydti', 
        api_key: '922436761546755', 
        api_secret: 'GQzo8l-XwouIosky-rNmXLkEK-k' 
    });

const cloudinaryMiddlewar=async(filename)=>{

     const uploadResult = await cloudinary.uploader
       .upload(filename)
       .catch((error) => {
           console.log(error,"error");
       });

       fs.unlinkSync(filename)
       return uploadResult
    
   

}
module.exports=cloudinaryMiddlewar