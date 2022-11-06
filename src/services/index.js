const {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
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
};
