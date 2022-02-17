/**
 * * Core modul yang digunakan: http
 * 
 * * Template untuk membuat server menggunakan NodeJS
 */

const http = require("http")
const fs = require('fs')
http.createServer(function (req /*: Request.IncomingMessage*/ , res /*: http.ServerResponse*/ ) {
    console.log('Hello World! Node JS you')
    // * req: menampung data yang datang
    // * res: menampung data yang akan dimunculkan

    /**
     ** object request itu ada banyak, tapi yang sering dipakai itu cuma 3
     ** url, method, headers
     */

    // * create object yang berisi url, method, dan headers
    const data = {
        url: req.url,
        method: req.method,
        headers: req.headers
    }


    //* ini akan mengubah bentuk tulisan menjadi format JSON

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(data))
    res.end()

    //* basic ways how to load any kind of files in node js
    //fs.readFile('index.html', (err, data) => {
    //    res.setHeader('Content-Type', 'text/html')
        
    //    res.write(data)
    //    res.end()
    //})

    //res.writeHead(200, {
    //    'Content-Type': 'text/html'
    //})

    //res.write('<h1>Hello World!</h1>')
    //res.end()

}).listen(3000)