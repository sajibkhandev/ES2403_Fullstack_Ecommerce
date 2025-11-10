const Userlist = require('../models/userSchema')
const nodemailer = require("nodemailer");

const forgetPasswordController = async (req, res) => {
    let { email } = req.body

    let existinguser = await Userlist.findOne({ email: email })
    // console.log(existinguser);

    if (existinguser) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "esmern2403@gmail.com",
                pass: "qnpmwvwugepsewbv",
            },
        });
        const info = await transporter.sendMail({
            from: '"Ecommerce" <esmern2403@gmail.com>',
            to: email,
            subject: "Reset Password",
            text: "Hello world?", // plain‑text body
            html: `<div style="background:#98ebeb;width:500px;padding:100px 50px;border-radius:10px;text-align:center"><h1 style=font-size:50px>Ecommrece</h1><p style=font-size:20px>This is Online Shopping Ecommerce.Here are your Reset password formet. Please ensure and click to reset you password.</p><a href="http://localhost:5173/changepassword/${email}"style="background:#00f;color:#fff;padding:10px 40px;font-size:20px;border:0;border-radius:10px;margin-bottom:30px;display:inline-block;cursor:pointer;text-decoration:none">Reset Password</a><p style=margin-bottom:50px>this is my company socil handle. consectetur adipisicing elit. Voluptatem dolore vitae, doloribus corporis quis a iure labore, animi at odio laudantium cum ipsa dolorum ea nihil molestias totam autem repellat.</p><a href=""><img alt=""src=https://i.ibb.co.com/MymTDn6L/images.jpg style=width:50px></a><a href=""><img alt=""src=https://i.ibb.co.com/fVFj5pCd/z3bn6deaxmrjm-QHNEkpc-ZE.jpg style=width:50px></a><a href=""><img alt=""src=https://i.ibb.co.com/4Zk8vxpJ/images-1.jpg style=width:50px></a><a href=""><img alt=""src=https://i.ibb.co.com/S7VfLjjh/Linkedin-logo-on-transparent-PNG.png style=width:50px></a></div>`, 
        });

        res.send({success:"Check Your Email"})


    } else {
        res.send({error:"Creditial inviled"})

    }




}

module.exports = forgetPasswordController