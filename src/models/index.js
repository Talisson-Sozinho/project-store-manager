const {
  searchAllProducts,
  searchByProductId,
  createProduct,
  verifyIds,
  updateProductById,
  removeProductById,
} = require('./productModels');

const {
  registerSale,
  createSalesProduct,
  getAllSales,
  getSalesById,
  removeSalesById,
  updateSalesById,
} = require('./salesModels');

module.exports = {
  verifyIds,
  searchAllProducts,
  searchByProductId,
  createProduct,
  updateProductById,
  removeProductById,
  registerSale,
  createSalesProduct,
  getAllSales,
  getSalesById,
  removeSalesById,
  updateSalesById,
};
