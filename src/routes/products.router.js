const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.allProducts);

router.get('/:id', controllers.productsById);

module.exports = router;
