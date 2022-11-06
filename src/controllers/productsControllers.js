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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const productUpdated = await services.updateProductById(id, name);

  return res.status(200).json(productUpdated);
};

const removeProductById = async (req, res) => {
  const { id } = req.params;

  await services.removeProductById(id);

  return res.sendStatus(204);
};

const searchProductsByName = async (req, res) => {
  const { query: { q } } = req;
  const products = await services.searchProductsByName(q);
  return res.status(200).json(products);
};

module.exports = {
  allProducts,
  productsById,
  createNewProduct,
  updateProduct,
  removeProductById,
  searchProductsByName,
};
