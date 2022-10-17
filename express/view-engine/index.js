const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const crypto = require('crypto')

const users = []

//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //! penting klo mau ngirim data dari form

//* parse application/json
app.use(bodyParser.json()) //! klo mau ngirim data dari json

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index') // untuk merender file ejs dari dalam folder views, parameter di dalamnya diisikan nama file tanpa extension .js 
})

app.get('/greet', (req, res) => {
    const name = req.query.name || 'User'
    res.render('greet', {
        name
    })
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    users.push({
        email,
        password: crypto.createHash('sha256').update(password).digest('hex')
    })
    console.log(users)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/**
 * Summary:
 * ejs adalah template engine yang dapat menggunakan syntax html
 * ejs bisa menggunakan syntax html, javascript, dan css
 * ejs mudah digunakan karena bersifat templating engine
 * cara menambahkan ejs ke dalam express adalah dengan menambahkan view engine
 */