function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0
}

module.exports = (req, res, next) => {
    // jika body kosong maka akan skip middleware ini
    if (isEmpty(req.body)) {
        next()
    } else {
        console.log("BODY", req.body)
        res.send(req.body)
        next()
    }
}