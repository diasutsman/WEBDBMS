const express = require('express')
const app = express()
const router = express.Router()
const port = 3000


// semua middleware dimasukkan ke dalam router
// ini yang dinamakan route-level middleware
router.use((req, res, next) => {
    console.log(`Time now: ${new Date().toLocaleTimeString()}`) // action dari middleware
    next()
})

router.get('/middleware', (req, res) => {
    res.send('ini middleware')
})

// lalu di masukkan ke dalam app
app.use(router)
// END OF ROUTE-LEVEL MIDDLEWARE

// routing dengan method GET
app.get('/', (req, res) => {
    res.send('Hello World')
})

// routing dengan method GET dengan path /product
app.get('/product', (req, res) => res.json(["apple", "Redmi", "One Plus One",]))

// routing dengan method GET dengan path /product
app.get('/order', (req, res) => res.json([
    {
        "id": 1,
        "paid": false,
        "user_id": 1,
    },
    {
        "id": 2,
        "paid": false,
        "user_id": 1,
    },
]))

// listen to port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})