require ('dotenv').config()
const cors = require('cors')
const port = process.env.WEBAPI_PORT || 9999
const initMongoDB = require('./server-mongodb')
const express = require('express')
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/products', require('./controllers/productsController'))


// initialize - start upp
initMongoDB()
app.listen(port, () => console.log(`WebApi is running at http://localhost:${port}`))