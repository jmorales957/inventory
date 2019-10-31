require( 'dotenv' ).config();

const mongoose = require('mongoose')

const db = mongoose.connect( process.env.MONGO_URI_TEST , {useNewUrlParser: true});

before(function() {
    console.log( 'initialing database' );
});

