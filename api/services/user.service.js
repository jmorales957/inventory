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
    updateUserById: async (userId,data) => {
        console.log(data)
        const user_detail = await  UserDetailsModel.findOne( { user_id: userId } );
        user_detail.address = data.address
        user_detail.phone = data.phone
        user_detail.rfc = data.rfc
        user_detail.save()
        const user = await UserModel.findById( userId );
        user.name = data.name
        user.last_name = data.last_name
        user.password = data.password
        user.mail = data.mail
        user.active = data.active
        user.save()
        return user;
    }, 
    removeUserById: async ( userId, data ) => {
        const details = await UserDetailsModel.findOneAndDelete( { user_id: userId } );
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
            ...userDetails
        }
    }
}