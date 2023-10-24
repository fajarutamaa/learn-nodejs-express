const express = require('express')
const app = express()
const router = require('./routes/route')

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})