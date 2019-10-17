const mongoose = require('mongoose')

const db = mongoose.connect( process.env.MONGO_URI , {useNewUrlParser: true});

module.exports = db
