const router = require('express').Router();
const ProductController = require('../controllers/ProductContorller');
const authMiddleware = require( '../middlewares/auth.middleware' );

router.get('/', authMiddleware, ProductController.index);
router.post('/',authMiddleware, ProductController.store);
router.put('/:id',authMiddleware, ProductController.update);
router.delete('/:id',authMiddleware, ProductController.delete);

module.exports = router