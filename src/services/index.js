const { getAllProducts, getProductById, createNewProduct } = require('./productsService');

const { createNewSales, getSalesById, getAllSales } = require('./salesService');

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  createNewSales,
  getSalesById,
  getAllSales,
};
