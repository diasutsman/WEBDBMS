/**
 * URL Query String
 * 
 * pasangan antara key - value yang ada di URL yang di pisahkan dengan ?
 * 
 * contoh: https://www.google.com/
 * ketika searching: https://www.google.com/search?q=Function.arguments+alternative
 * 
 * dalam kasus ini:
 * q adalah key
 * Function.arguments+alternative adalag value
 * 
 * fungsinya adalah untuk mengirim data ke server dengan method get
 */

const http = require('http')
const querystring = require('querystring')
const url = require('url')

http.createServer(function (req, res) {
    res.setHeader('Content-type', 'application/json')
    const dataResponse = {},
        myUrl = url.parse(req.url)
    
    if (!myUrl.query) dataResponse.data = 'Query String not found'
    else dataResponse.data = querystring.parse(myUrl.query)
    res.end(JSON.stringify(dataResponse))
}).listen(8080)