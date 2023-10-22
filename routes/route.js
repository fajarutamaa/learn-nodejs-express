const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')
const morgan = require('morgan')

router.use(morgan('dev'))
router.get('/ping', (req, res) => {
    res.json({
        "data": null,
        "message": "PONG",
        "status": 200
    })
})

router.use('/user', userRoute)

module.exports = router