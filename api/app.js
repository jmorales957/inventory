const express = require('express')
const app = express()

const db = require('./database/database')
const userRoutes = require('./routes/user')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/v1/users',userRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('running');
})

