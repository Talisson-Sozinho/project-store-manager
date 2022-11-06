const express = require('express');
const controllers = require('../controllers');
const validateBodyProducts = require('../middlewares/validateBodyProducts');

const router = express.Router();

router.get('/', controllers.allProducts);

router.get('/:id', controllers.productsById);

router.delete('/:id', controllers.removeProductById);

router.use(validateBodyProducts);

router.put('/:id', controllers.updateProduct);

router.post('/', controllers.createNewProduct);

module.exports = router;
