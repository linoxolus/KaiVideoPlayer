const router = require('express').Router();
const uploadController = require('../controllers/upload.controller');

router.get('/', uploadController.index);

module.exports = router;