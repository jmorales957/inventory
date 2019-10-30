const jsonwebtoken = require('jsonwebtoken')

module.exports = {
    generateToken: ( user ) => {
        const token = jsonwebtoken.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET,{
            expiresIn: '1h'
        })
        return token;
    }
}