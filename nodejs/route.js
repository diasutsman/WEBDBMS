const http = require('http')
http.createServer(function (req, res) {
    const {
        url
    } = req
    let dataResponse
    //console.log(req.headers.host)

    res.setHeader('Content-type', 'application/json')

    // ROUTING (tkj kok ngoding)
    // in every programming langunge, routing is like this
    switch (url.toLowerCase()) {
        case '/':
            dataResponse = {
                data: 'ini adalah home page'
            }
            break
        case '/login':
            dataResponse = {
                data: 'ini adalah login page'
            }
            break
        case '/register':
            dataResponse = {
                data: 'ini adalah register page'
            }
            break
        default:
            res.statusCode = 404
            dataResponse = {
                data: 'page not found'
            }
    }
    res.end(JSON.stringify(dataResponse))
}).listen(4200)