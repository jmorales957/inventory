
if ( process.env.NODE_ENV !== 'production' ) {
    require( 'dotenv' ).config();
}
const express = require('express')
const app = express()
const helmet  = require('helmet');
const morgan = require( 'morgan' );

const userRoutes = require('./routes/user')
const productsRoutes = require('./routes/product')
const path = require('path')
const cors = require('cors')
app.use( helmet() );
app.use('/public/products' ,express.static(__dirname +'/public/products'))

app.use(express.json())
app.use(cors())
app.use( morgan('combined') );

// import main file for routes
const routes = require( './routes/index.routes' );

app.use('/api/v1', routes );

module.exports = app;


