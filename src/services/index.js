const {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
  searchProductsByName,
} = require('./productsService');

const {
  createNewSales,
  getSalesById,
  getAllSales,
  removeSalesById,
  updateSalesById,
} = require('./salesService');

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
  createNewSales,
  getSalesById,
  getAllSales,
  removeSalesById,
  updateSalesById,
  searchProductsByName,
};
