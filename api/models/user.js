const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    active : {
        type: Boolean,
        default: true
    },
    user_type: {
        type: Number
    }
});
userSchema.pre( 'save', function( next ) {
    const self = this;
    bcrypt.hash( self.password, 12, function (err, hash) {
        if ( err ) {
            throw new Error(err)
        }
        self.password = hash;
        next();
    } )
} );
userSchema.methods.comparePassword = function( passwordToVerify ) {
    return new Promise( (resolve, reject) => {
        bcrypt.compare( passwordToVerify, this.password, (err, matched) => {
            if( err ) {
                reject( err )
            }
            resolve(matched);
        } )
    } )
    
}
module.exports = new mongoose.model('User',userSchema)