const router = require('express').Router()
const User = require('../models/user')
const jsonwebtoken = require('jsonwebtoken')

router.post('/', async (req, res) => {

    const user = await User.findOne({mail: req.body.email})
    if (req.body.password == user.password) {

        const token = jsonwebtoken.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET,{
            expiresIn: '1h'
        })
        res.header('auth-token', token)
        return res.json({
            data: user,
            token: token
        })
    }
})

module.exports = router