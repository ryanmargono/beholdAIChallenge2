const router = require('express').Router()
const studies = require('../database/studies.json')

router.get('/', (req, res, next) => res.json(studies))

module.exports = router