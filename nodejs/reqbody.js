/**
 * 
 * Request Body
 * 
 * kita akan menampilkan cara untuk membaca request body pada server
 * 
 * terdapat 2 bentuk transaksi data antara client dan server :
 * upload: mengirim / mengunggah data ke server
 * download: menerima / mengunduh data dari server
 * 
 * stream yaitu kegiatan transaksi dari awal hingga akhir, meliputi:
 * 1. mulai dengan menentukan tujuan
 * 2. pemotongan data yang kemudian akan dikirim menjadi bagian yang kecil - kecil (chunks)
 * 3. pengiriman data berbentuk chunk ke tujuan disebut buffering
 * 4. setelah semua data sudah selesai di buffer, satukan chunk - chunk yang ada agar utuh kembali
 */

const http = require('http')
const querystring = require('querystring')
http.createServer(function (req, res) {
    let { url: urlReq } = req,
        methodReq = req.method.toLowerCase() ?? 'get',
        dataReq

    const chunkArr = []
    const dataResponse = {}

    res.setHeader('Content-type', 'application/json')

    if (urlReq.toLowerCase() === '/login') {

        //* pada saat method adalah get
        if (methodReq === 'get') dataResponse.data = 'ini adalah halaman login'

        //* pada saat method adalah post
        else if (methodReq === 'post') {
            //* buffering data dari body request
            //* ini adalah contoh asynchronous karena pada saat buffering diproses, ini akan dibiarkan berjalan
            //* sambil melakukan hal yang lain
            //* jadi, setelah ini javascript akan keluar dari block else if
            req.on('data', chunk => chunkArr.push(chunk))
        } else dataResponse.data = 'Ubah data ke method GET atau POST'
    } else dataResponse.data = 'Gunakan /login'

    //* pada saat buffer data sudah selesai
    //* maka tampilkan data
    req.on('end', () => {
        if (chunkArr.length !== 0) dataResponse.data = querystring.parse(Buffer.concat(chunkArr).toString())
        else dataResponse.data = 'data kosong'
        return res.end(JSON.stringify(dataResponse))
    })
    res.end(JSON.stringify(dataResponse))
}).listen(2006)