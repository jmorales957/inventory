const router = require('express').Router()
const UserConntroller = require('../controllers/UserController')
const authMiddleware = require( '../middlewares/auth.middleware' );

router.post('/',authMiddleware, UserConntroller.store)
router.get('/',authMiddleware, UserConntroller.index)
router.delete('/:id',authMiddleware, UserConntroller.delete)
router.put('/:id',authMiddleware, UserConntroller.update)
router.get('/:id',authMiddleware, UserConntroller.findDetail)



module.exports = router