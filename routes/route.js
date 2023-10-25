const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')
const morgan = require('morgan')

router.use(morgan('dev'))

router.get('/ping', (req, res) => {
    const pong = 'PING' || 'void'
    res.sender('index', {
        pong
    })
    return
})

router.post('/signup', (req, res) => {
    const pong = 'PING' || 'void'
    res.sender('register')
    return
})

router.use('/user', userRoute)


module.exports = router