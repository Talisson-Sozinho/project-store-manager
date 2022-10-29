const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.allProducts);

router.get('/:id', controllers.productsById);

router.post('/', controllers.createNewProduct);

module.exports = router;
