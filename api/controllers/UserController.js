const User = require('../models/user')

exports.store = async (req,res) => {
    try {
    const user = await  User.create(req.body)
    return res.stutus(200).json(user)

    } catch (error) {
     return res.status(500).json(error)   
    }
}

exports.index = async(req,res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        
    }
}