const {
  searchAllProducts,
  searchByProductId,
  createProduct,
  verifyIds,
} = require('./productModels');

const { registerSale, createSalesProduct, getAllSales, getSalesById } = require('./salesModels');

module.exports = {
  verifyIds,
  searchAllProducts,
  searchByProductId,
  createProduct,
  registerSale,
  createSalesProduct,
  getAllSales,
  getSalesById,
};
