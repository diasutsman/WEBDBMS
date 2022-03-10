// internal config
//const express = require('express')
//const app = express()
//const port = 3000

//app.get('/', (req, res) => {
//    res.send('Berhasil mengonfig app')
//})

//app.get('*', (req, res) => {
//    res.send('Not Found')
//})

//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`)
//})

// external config
const express = require('express')
const app = express()

require('dotenv').config()
app.get('/', (req, res) => {
    const status = process.env.PORT == 5000?  'Production' : 'Developer'
    res.send(`Anda berada di halaman ${status}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})