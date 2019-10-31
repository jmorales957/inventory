const authService = require( './auth.service' );
const UserModel = require( '../models/user' );
const UserDetailsModel = require( '../models/user_detail' );
module.exports = {
    getUsers: async () => {
        const results = await UserModel.find( {} );
        return results;
    },
    saveUser: async data => {
        try {
            const savedUser = await UserModel.create( data );
            const detailsAboutUser = await UserDetailsModel.create( { user_id: savedUser._id, ...data } );
            return {
                message: 'User created',
                success: true,
                data: {
                    ...savedUser._doc,
                    ...detailsAboutUser._doc
                },
                error: null
            }
        }
        catch (error) {
            return {
                message: 'Error creating user',
                success: false,
                error,
                data: null
            }
        }
        
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
    },
    verifyCredentials: async ( email, password ) =>  {
        let data;
        const userFound = await UserModel.findOne({ mail: email });
        if( !userFound ) {
            data['success'] = false;
            data['message'] = 'Invalid credentials';
        }
        else {
            const validPassword = await userFound.comparePassword( password );
            if ( validPassword ) {
                const token = await authService.generateToken( userFound );
                data['success'] = true;
                data['message'] = 'Logged in';
                data['user'] = userFound;
                data['token'] = token;
            }
            else {
                data['success'] = false;
                data['message'] = 'Invalid credentials';
                
            }
        }
        return data;
    }
}