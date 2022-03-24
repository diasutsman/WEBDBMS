const users = [
    {
        id: 1,
        nama: 'budi',
        kelas: '10 RPL A'
    },
    {
        id: 2,
        nama: 'andi',
        kelas: '10 RPL B'
    },
    {
        id: 3,
        nama: 'caca',
        kelas: '10 RPL C'
    },
    {
        id: 4,
        nama: 'didi',
        kelas: '10 RPL D'
    },
    {
        id: 5,
        nama: 'euy',
        kelas: '10 RPL E'
    },
    {
        id: 6,
        nama: 'fof',
        kelas: '10 RPL F'
    },
    {
        id: 7,
        nama: 'gog',
        kelas: '10 RPL G'
    },
    {
        id: 8,
        nama: 'hoh',
        kelas: '10 RPL H'
    },
    {
        id: 9,
        nama: 'iio',
        kelas: '10 RPL I'
    },
    {
        id: 10,
        nama: 'jjo',
        kelas: '10 RPL J'
    },
    {
        id: 11,
        nama: 'kko',
        kelas: '10 RPL K'
    },
    {
        id: 12,
        nama: 'lll',
        kelas: '10 RPL L'
    },
    {
        id: 13,
        nama: 'mmm',
        kelas: '10 RPL M'
    },
    {
        id: 14,
        nama: 'nnn',
        kelas: '10 RPL N'
    },
    {
        id: 15,
        nama: 'ooo',
        kelas: '10 RPL O'
    },
    {
        id: 16,
        nama: 'ppp',
        kelas: '10 RPL P'
    },
    {
        id: 17,
        nama: 'qqq',
        kelas: '10 RPL Q'
    },
    {
        id: 18,
        nama: 'rrr',
        kelas: '10 RPL R'
    },
    {
        id: 19,
        nama: 'sss',
        kelas: '10 RPL S'
    },
    {
        id: 20,
        nama: 'ttt',
        kelas: '10 RPL T'
    },
]


// express module
const express = require('express')
const bodyParser = require('body-parser')

// express router
const router = express.Router()
// route user dengan method get
router.get('/user', (req, res, next) => {
    // hello user
    res.send(users)
})

// get user by id
router.get('/user/:id', (req, res, next) => {
    // hello user
    const user = users.find(({id}) => id === parseInt(req.params.id))
    if (!user) {
        res.status(404).send('user not found')
    }
    res.send(user)
})

// export router
module.exports = router