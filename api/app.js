
require( 'dotenv' ).config();
const express = require('express')
const app = express()
const helmet  = require('helmet');

const db = require('./database/database')
const userRoutes = require('./routes/user')
const productsRoutes = require('./routes/product')
const path = require('path')
const cors = require('cors')
const auth = require('./services/auth')
app.use( helmet() );
app.use('/public/products' ,express.static(__dirname +'/public/products'))


app.use(express.json())
app.use(cors())

// import main file for routes
const routes = require( './routes/index.routes' );

app.use('/api/v1',auth, routes );

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('running');
})

