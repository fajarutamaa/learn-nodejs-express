function PrintSuccess(req, res, next) {
    console.log(` Selalu Berhasil Akses `)
    next()
}


function PrintSuccessRoute(req, res, next) {
    console.log(` Selalu Berhasil Akses Melalui Route`)
    next()
}

function CheckPostReq(req, res, next) {

    if (req.body.name == null || req.body.addres == "") {
        let respErr = ResponseTemplate(null, 'invalid request', new Error('invalid request', 400))
        res.json(respErr)
    }

    next()
}

module.exports = {
    PrintSuccess,
    PrintSuccessRoute,
    CheckPostReq
}