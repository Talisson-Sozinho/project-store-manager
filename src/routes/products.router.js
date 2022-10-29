const express = require('express');
const controllers = require('../controllers');
const validateBodyProducts = require('../middlewares/validateBodyProducts');

const router = express.Router();

router.get('/', controllers.allProducts);

router.get('/:id', controllers.productsById);

router.use(validateBodyProducts);

router.post('/', controllers.createNewProduct);

module.exports = router;
