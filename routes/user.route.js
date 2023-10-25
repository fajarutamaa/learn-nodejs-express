const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')


router.get('/', Get)
router.get('/:id', GetByPK)
router.post('/', CheckPostReq, Insert)
router.put('/:id', Update)
router.put('/:id', Delete)



module.exports = router