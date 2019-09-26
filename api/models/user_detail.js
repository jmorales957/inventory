const mongoose = require('mongoose')

const UserDeatilSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    address: {
        type: String,

    },
    phone: {
        type: String
    },
    rfc: {
        type: String
    }

})
module.exports = new mongoose.model('User_Detail', UserDeatilSchema )