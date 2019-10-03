const User = require('../models/user')
const UserDetail = require('../models/user_detail')

exports.store = async (req, res) => {
    try {
        const user = new User()
        user.name = req.body.name
        user.last_name = req.body.last_name
        user.password = req.body.password
        user.mail = req.body.mail
        user.active = req.body.active
        await user.save()
        const user_detail = new UserDetail()
        user_detail.user_id = user._id
        user_detail.address = req.body.address
        user_detail.phone = req.body.phone
        user_detail.rfc = req.body.rfc
        await user_detail.save()
        return res.status(200).json({
            message: 'User added',
            success: true
        })

    } catch (error) {
        return res.status(500).json(error.errors)
    }
}

exports.index = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {

    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        await User.findOneAndDelete(id)
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
        const id = req.params.id
        await User.findOneAndUpdate(id,req.body)
        return res.status(200).json({
                message: 'User updated',
                success: true
            }
        )
    } catch (error) {
        console.log(error)
    }


}