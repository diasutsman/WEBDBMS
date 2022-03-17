module.exports = (req, res, next) => {
    // akan menampilakan data yang telah disaring oleh bodyParser
    console.log("METHOD", req.method)
    console.log("BODY", req.body)
    console.log("Headers", req.headers)
    next()
}