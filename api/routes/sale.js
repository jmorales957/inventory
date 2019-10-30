const router = require('express').Router()
const SaleController = require('../controllers/SaleController')
const authMiddleware = require( '../middlewares/auth.middleware' );

router.post('/',authMiddleware, SaleController.store)

module.exports = router