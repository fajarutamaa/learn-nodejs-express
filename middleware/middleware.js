const { ResponseTemplate } = require('../helper/template.helper')
const Joi = require('joi')

// function PrintSuccess(req, res, next) {
//     const { } = req.params.id
//     console.log(` Selalu Berhasil Akses `)
//     next()
// }


// function PrintSuccessRoute(req, res, next) {
//     console.log(` Selalu Berhasil Akses Melalui Route Level`)
//     next()
// }

function CheckPostReq(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().aphanum().max(255).required(),
        address: Joi.string().alphanum().required(),
        email: Joi.string().alphanum().email().required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        let respError = ResponseTemplate(null, 'invalid request', error.details[0].message, 400)
        res.json(respError)
        return
    }

    next()
}


module.exports = {
    CheckPostReq
}