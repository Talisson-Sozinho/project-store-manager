const {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
  removeProductById,
} = require('./productsControllers');

const { newSales, allSales, salesById, removeSalesById } = require('./salesControllers');

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
  removeProductById,
  newSales,
  allSales,
  salesById,
  removeSalesById,
};
