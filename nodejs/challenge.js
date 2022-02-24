
// ganti nama variable modul http dan server dengan nama sendiri
const dias = require('http')

const utsman = dias.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json')
    const {url} = req, dataResponse = {}, method = req.method ?? 'GET'

    // buat respons halaman home, about, form, dan juga 404 not found
    switch (url.toLowerCase()) {
        case '/':
            dataResponse.data = 'This is home page'
            break;
        case '/form':
            // buat respons mengirim data "anda berhasil mengirim data" jika methodnya POST
            dataResponse.data = method == 'POST'? 'you successfully add data' :  'Sorry, cannot add data'
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