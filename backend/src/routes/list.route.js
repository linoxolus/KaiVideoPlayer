const router = require('express').Router();
const listController = require('../controllers/list.controller');

router.get('/', listController.index);

module.exports = router;
