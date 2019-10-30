const mongoose = require('mongoose')

const SaleSchema = mongoose.Schema({
    date: {
        type: Date
    },
    client_id: {
        type:  mongoose.Schema.Types.ObjectId,
        required: [true,'El cliente es requerido']
    }

})
SaleSchema.set('timestamps', true);

module.exports = new mongoose.model('Sale',SaleSchema)
