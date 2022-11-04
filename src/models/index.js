const {
  searchAllProducts,
  searchByProductId,
  createProduct,
  verifyIds,
  updateProductById,
} = require('./productModels');

const { registerSale, createSalesProduct, getAllSales, getSalesById } = require('./salesModels');

module.exports = {
  verifyIds,
  searchAllProducts,
  searchByProductId,
  createProduct,
  updateProductById,
  registerSale,
  createSalesProduct,
  getAllSales,
  getSalesById,
};
