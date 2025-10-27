const mongoose = require('mongoose');

const mongodbConfig=()=>{
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ql3v7el.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('Connected!'));

}

module.exports=mongodbConfig


// mongodb+srv://esmern2403:cCg3vbCFgoz2SEbM@cluster0.ql3v7el.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0