// untuk configurasi env
require('dotenv').config();

const express = require('express')
const app = express()

// routes
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
// disini buat routing yang sudah dibuat diatas
app.use('/', indexRouter, userRouter)

// mendengar port dari env
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})