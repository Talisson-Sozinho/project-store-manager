const {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
} = require('./productsService');

const { createNewSales, getSalesById, getAllSales } = require('./salesService');

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  createNewSales,
  getSalesById,
  getAllSales,
};
