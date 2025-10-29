const emailRegex = require("../helpers/emailRegex");
const emailVerification = require("../helpers/emailVerification");
const Userlist = require('../models/userSchema')
const bcrypt = require('bcrypt');

const registrationController = async (req, res) => {

   let { username, email, password } = req.body

   if (!username) {
      res.send({ error: "Please give your username", });

   } else if (!email) {
      res.send({ error: "Please give your email" });

   } else if (!emailRegex(email)) {
      res.send({ error: "Please give a valid Email" });
   }
   else if (!password) {
      res.send({ error: "Please give your password" });
   }
   else {

      let existingUser = await Userlist.find({ email: email })
      // console.log(existingUser[0].email);

      if (existingUser.length>0) {
         res.send({ error: `${existingUser[0].email} email already in used` })

      } else {
         bcrypt.hash(password, 10, function (err, hash) {

            let data = new Userlist({
               username: username,
               email: email,
               password: hash
            })
            data.save()
            res.send({ username: data.username, email: data.email });
            emailVerification(email)


         });

      }



   }
}

module.exports = registrationController