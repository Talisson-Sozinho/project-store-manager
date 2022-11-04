const { getAllProducts, getProductById, createNewProduct } = require('./productsService');

const { createNewSales } = require('./salesService');

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  createNewSales,
};
