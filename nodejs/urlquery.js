const http = require('http')
const querystring = require('querystring')
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    res.end()
}).listen(8080)