const http = require('http')
http.createServer((req, res) => {
    //let dataHeader = req.headers, // akan menampung object header request
    //    dataAuthorization = dataHeader.authorization, // berisi properti dari object header
    //    splitData, // pemisih atau pembatas antara value authorization
    //    dataUser, // kode dengan pemisah 
    //    userPass, // untuk menyimpan user & password
    //    dataResponse // untuk menyimpan data response

    res.setHeader('Content-Type', 'application/json')

    //to get headers from request by user
    //console.log('auth data: ', dataAuthorization)

    // get authorization data
    if (!req.headers.authorization) {

        // give response to client and return to stop
        // so basically what happen is method .end() is return undefined and create server is also return undefined 
        // so that's alright
        return res.end(JSON.stringify({
            data: 'Undefined Authorization'
        }))
    }

    //splitData = dataHeader.authorization.split(' ')
    //dataUser = splitData[1]

    //console.log('user:', dataUser)
    //userPass = Buffer.from(dataHeader.authorization.split(' ')[1], "base64").toString()
    //console.log('user pass:', userPass)
    //console.log('\n')
    // create response berisi nilai dan user pass

    return res.end(JSON.stringify({
        token: req.headers.authorization,
        userPass: Buffer.from(req.headers.authorization.split(' ')[1], "base64").toString()
    }))
}).listen(2022)