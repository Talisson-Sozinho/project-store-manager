const {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
} = require('./productsService');

const { createNewSales, getSalesById, getAllSales } = require('./salesService');

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
  createNewSales,
  getSalesById,
  getAllSales,
};
