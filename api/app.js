const express = require('express')
const app = express()

const db = require('./database/database')
const userRoutes = require('./routes/user')
const productsRoutes = require('./routes/product')
const path = require('path')
const cors = require('cors')

app.use('/public/products' ,express.static(__dirname +'/public/products'))

app.use(express.json())
app.use(cors())

app.use('/api/v1/users',userRoutes)
app.use('/api/v1/products',productsRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('running');
})

