const router = require('express').Router()
const UserConntroller = require('../controllers/UserController')

router.post('/',UserConntroller.store)
router.get('/',UserConntroller.index)


module.exports = router