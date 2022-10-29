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

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const product = await services.createNewProduct(name);
  return res.status(201).json(product);
};

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
};