const userService = require( '../services/user.service' );
exports.store = async (req, res) => {
    try {
        const result = await userService.saveUser( req.body );
        return res.status(200).json({
            message:  result.message,
            success: result.success,
            data: result.data,
            error: result.error
        })

    } catch (error) {
        switch (error.name) {
            case 'ValidationError':
               return res.status(400).json({
                    message: error.message,
                    errors: error.errors,

                })
            break;
            default:
                return res.status(500).json({
                    message: error.message,
                    errors: 'Error del servidor '

                })

        }

    }
}

exports.index = async (req, res) => {
    try {
        const users = await userService.getUsers();
        return res.status(200).json(users)
    } catch (error) {

    }
}
exports.delete = async (req, res) => {
    try {
        userService.removeUserById( req.params.id );
        return res.status(200).json({
                message: 'User removed',
                success: true
            }
        )
    } catch (error) {
        console.log(error)
    }


}

exports.update = async (req, res) => {
    try {
        const user = userService.updateUserById( req.params.id, req.body );
        return res.status(200).json({
                message: 'User updated',
                success: true,
                data: user
            }
        )
    } catch (error) {
        console.log(error)
    }


}

exports.findDetail = async (req, res) => {
    try {
        const user = await userService.getUser( req.params.id );
        return res.status(200).json({
                message: 'User detail',
                success: true,
                data: user
            }
        )
    } catch (error) {
        console.log(error)
    }

}