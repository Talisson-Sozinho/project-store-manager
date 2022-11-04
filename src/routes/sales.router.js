const express = require('express');
const controllers = require('../controllers');
const validateBodySales = require('../middlewares/validateBodySales');

const router = express.Router();

router.use(validateBodySales);

router.post('/', controllers.newSales);

module.exports = router;
