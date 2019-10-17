const UserModel = require( '../models/user' );
const UserDetailsModel = require( '../models/user_detail' );
module.exports = {
    getUsers: async () => {
        const results = await UserModel.find( {} );
        return results;
    },
    saveUser: async data => {
        const savedUser = await UserModel.create( data );
        const detailsAboutUser = await UserDetailsModel.create( { user_id: savedUser._id, ...data } );
        return savedUser;
    },
    updateUserById: async userId => {
        await UserDetailsModel.findOneAndUpdate( { user_id: userId }, data );
        const result = await UserModel.findByIdAndUpdate( userId, data );
        return result;
    }, 
    removeUserById: async ( userId, data ) => {
        const details =  UserDetailsModel.findOneAndDelete( { user_id: userId } );
        const user = await UserModel.findByIdAndRemove( userId, data );
        return {
            ...details,
            ...user
        };
    },
    getUser: async userId => {
        const user = await UserModel.findById( userId );
        const userDetails = await UserDetailsModel.findOne( { user_id: userId } );
        return {
            ...user,
            ...userDetails
        }
    }
}