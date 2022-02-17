const dias = require('http')

const utsman = dias.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')
    const {url} = req, dataResponse = {}, method = req.method ?? 'GET'
    switch (url.toLowerCase()) {
        case '/':
            dataResponse.data = 'This is home page'
            break;
        case '/form':
            dataResponse.data = method == 'POST'? 'Successfully add data' : 'Sorry, cannot add data'
            break;
        case '/about':
            dataResponse.data = 'This is about page'
            break;
        default:
            dataResponse.data = '404, page not found'
    }
    res.end(JSON.stringify(dataResponse))
})
utsman.listen(2006)