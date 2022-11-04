const {
  searchAllProducts,
  searchByProductId,
  createProduct,
  verifyIds,
} = require('./productModels');

const { registerSale, createSalesProduct } = require('./salesModels');

module.exports = {
  verifyIds,
  searchAllProducts,
  searchByProductId,
  createProduct,
  registerSale,
  createSalesProduct,
};
