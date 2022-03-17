require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const middlewareHeaders = require('./middlewares/headers');
const middlewareBody = require('./middlewares/body')

// middleware
app.use('/', bodyParser.json(), middlewareHeaders)

// middleware dengan method POST
app.post('/', bodyParser.urlencoded({extended: true}), middlewareBody)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

//* middleware berfungsi untuk mengambil data dari request
//* middleware yang menggunakan app.use() berlaku untuk semua request dan method
//* middleware yang menggunakan app.get() berlaku untuk semua request dengan GET
//* middleware yang menggunakan app.post() berlaku untuk semua request dengan POST