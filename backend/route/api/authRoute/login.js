const express =require('express')
const _=express.Router()

_.get('/login',(req, res)=>{
    res.send('ami login route')

})

module.exports=_