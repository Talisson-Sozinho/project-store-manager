const { allProducts, productsById, createNewProduct } = require('./productsControllers');

const { newSales } = require('./salesControllers');

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
  newSales,
};
