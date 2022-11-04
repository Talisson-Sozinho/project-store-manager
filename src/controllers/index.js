const { allProducts, productsById, createNewProduct } = require('./productsControllers');

const { newSales, allSales, salesById } = require('./salesControllers');

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
  newSales,
  allSales,
  salesById,
};
