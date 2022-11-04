const express = require('express');
const controllers = require('../controllers');
const validateBodyProducts = require('../middlewares/validateBodyProducts');

const router = express.Router();

router.get('/', controllers.allProducts);

router.get('/:id', controllers.productsById);

router.use(validateBodyProducts);

router.put('/:id', controllers.updateProduct);

router.post('/', controllers.createNewProduct);

module.exports = router;
