const router = require('express').Router()
const studies = require('../database/studies.json')

router.get('/', (req, res, next) => res.json(studies))

router.get('/:id', (req, res, next) => {
    res.json(studies.find(study => study.Metadata.SOPInstanceUID === req.params.id))
})

router.post('/', (req, res, next) => {
    const data = req.body
    console.log(Date.now())
    console.log(data.Metadata.SOPInstanceUID)
    console.log(data.diseases)
    res.json(req.body)
})

module.exports = router