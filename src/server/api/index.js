const router = require('express').Router();

router.use('/diseases', require('./diseases'))
router.use('/images', require('./images'))

module.exports = router;