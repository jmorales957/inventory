const router = require( 'express' ).Router();

const userRoutes = require( './user' );
const productRoutes = require( './product' );
const authRoutes = require( './auth' );




router.use( '/users', userRoutes );
router.use( '/products', productRoutes );
router.use( '/login',authRoutes  );

module.exports = router;