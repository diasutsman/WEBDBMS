/**
 * 
 * Routing dengan methods
 * 
 */
const http = require('http')
http.createServer(function (req, res) {
    res.setHeader('Content-type', 'application/json')

    const {
        url
    } = req,
    method = req.method ?? 'GET', dataResponse = {}

    // routing
    switch (url.toLowerCase()) {
        case '/':
            dataResponse.data = 'This is home page'
            break;
        case '/login':
            dataResponse.data = method == 'POST'? 'You have logged in with POST method' : 'Sorry, please login with POST method'
            break;
        default:
            dataResponse.data = '404, page not found'
    }

    res.end(JSON.stringify(dataResponse))
}).listen(2006)