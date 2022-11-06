const {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
  removeProductById,
  searchProductsByName,
} = require('./productsControllers');

const {
  newSales,
  allSales,
  salesById,
  removeSalesById,
  updateSalesById,
} = require('./salesControllers');

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
  updateSalesById,
  searchProductsByName,
};
