// express module
const express = require('express')
const bodyParser = require('body-parser')

// express router
const router = express.Router()

// route index dengan method get
router.get('/', (req, res) => {
    // send to response 'good by world'
    res.send('good by world')
})

// route index dengan method post dengan body parser yang hanya menerima url encoded kemudian kirim
// req body
router.post('/', bodyParser.urlencoded({ extended: true }), (req, res, next) => {
    // send req body to response
    res.send(req.body)
})

// route index dengan method delete kemudian kirim
// req body
router.delete('/:id', (req, res, next) => {
    // send response `data dengan id`
    res.send(`data dengan id ${req.params.id} berhasil dihapus`)
})
router.delete('/', (req, res, next) => {
    // tidak bisa menghapus karena anda belum memasukkan id
    res.send('tidak bisa menghapus karena anda belum memasukkan id')
})

// export router
module.exports = router