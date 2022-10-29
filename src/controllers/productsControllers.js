const services = require('../services');

const allProducts = async (_req, res) => {
  const products = await services.getAllProducts();
  return res.status(200).json(products);
};

const productsById = async (req, res) => {
  const { id } = req.params;
  const product = await services.getProductById(id);
  return res.status(200).json(product);
};

module.exports = {
  allProducts,
  productsById,
};
