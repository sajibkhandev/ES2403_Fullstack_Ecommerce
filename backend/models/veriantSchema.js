const mongoose = require('mongoose');
const { Schema } = mongoose

const veriantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    des: {
        type: String,
    },
    image: {
        type: String,
       
    },
    saleprice: {
        type: Number,

    },
    regularprice: {
        type: Number,

    },
    slug: {
        type: String,
        required: true,
        unique: true

    },
   





})
module.exports = mongoose.model("Veriant", veriantSchema)