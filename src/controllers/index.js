const {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
} = require('./productsControllers');

const { newSales, allSales, salesById } = require('./salesControllers');

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
  newSales,
  allSales,
  salesById,
};
