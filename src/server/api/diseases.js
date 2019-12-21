const router = require('express').Router();
const diseases = require('../database/diseases.json')

router.get('/', (req, res, next) => res.json(diseases))

module.exports = router