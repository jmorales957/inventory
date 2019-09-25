const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = new mongoose.model('User',userSchema)