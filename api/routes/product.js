const router = require('express').Router()
const ProductController = require('../controllers/ProductContorller')

router.get('/',ProductController.index)
router.post('/',ProductController.store)
router.put('/:id',ProductController.update)
router.delete('/:id',ProductController.delete)

module.exports = router