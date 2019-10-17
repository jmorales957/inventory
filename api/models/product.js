const mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,'El nombre es requerido']
    },
    description:{
        type: String,
        required: [true,'La descripcion es requerida']
    },
    image_url:{
        type: String,
        //required: true
    },
    quantity:{
        type: mongoose.Schema.Types.Double,
        required: [true,'La cantidad es requerida']
    },
    price:{
        type: mongoose.Schema.Types.Double,
        required: [true,'El precio es requerido']
    }


})

module.exports = new mongoose.model('Product', ProductSchema)