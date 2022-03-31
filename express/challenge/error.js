const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

// lakukan fungsi ini pada saat di path /iniError
app.get('/iniError', (req, res) => {
    iniError
})

// jika error terjadi, maka akan menampilkan error
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        status: 'fail',
        error: err.message
    })
})

// routes not found
app.use((req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    })
})


// mendengarkan port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})