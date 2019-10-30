const router = require( 'express' ).Router();

const authRoutes = require( './auth' );
const userRoutes = require( './user' );
const productRoutes = require( './product' );
const SaleRoutes = require( './sale' );
const authService = require('../services/auth')




router.use( '/login',authRoutes  );
router.use( '/users',userRoutes );
router.use( '/products',productRoutes );
router.use( '/sale',SaleRoutes );

module.exports = router;