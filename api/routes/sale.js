const router = require('express').Router()
const SaleController = require('../controllers/SaleController')

router.post('/',SaleController.store)

module.exports = router