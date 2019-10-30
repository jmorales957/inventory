const userService = require( '../services/user.service' );
module.exports = {
    postLogin: async ( req, res ) => {
        const result = await userService.verifyCredentials( req.body.email, req.body.password );
        return res.status(200).json(result);
    }
}