const mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const SaleDetailSchema = mongoose.Schema({
    sale_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    price: {
        type: mongoose.Schema.Types.Double,
        required: true
    },
    quantity:{
        type: mongoose.Schema.Types.Double,
        required: [true,'La cantidad es requerida']
    }
})

module.exports = new mongoose.model('SaleDetail', SaleDetailSchema)