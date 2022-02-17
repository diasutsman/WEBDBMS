const http = require('http')
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    //to get headers from request by user

    // get authorization data
    if (!req.headers.authorization) {

        // give response to client and return to stop
        // so basically what happen is method .end() is return undefined and create server is also return undefined 
        // so that's alright
        return res.end(JSON.stringify({
            data: 'Undefined Authorization'
        }))
    }

    // create response berisi nilai dan user pass

    return res.end(JSON.stringify({
        token: req.headers.authorization,
        userPass: Buffer.from(req.headers.authorization.split(' ')[1], "base64").toString()
    }))
}).listen(2022)