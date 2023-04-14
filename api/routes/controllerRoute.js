const { Router } = require('express')
const Controller = require('../controller/Controller')
const router = Router()

router.get('/api', Controller.all)

module.exports = router