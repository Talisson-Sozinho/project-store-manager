const { NOT_FOUND, errorObject } = require('../helpers/errorHelper');
const models = require('../models');

const getAllProducts = async () => models.searchAllProducts();

const getProductById = async (id) => {
  const result = await models.searchByProductId(id);
  if (!result) throw errorObject(NOT_FOUND, 'Product not found');
  return result;
};

const createNewProduct = async (name) => {
  const insertId = await models.createProduct(name);
  return {
    id: insertId,
    name,
  };
};

const updateProductById = async (id, newName) => {
  const result = await models.updateProductById(id, newName);

  if (!result) throw errorObject(NOT_FOUND, 'Product not found');

  return {
    id,
    name: newName,
  };
};

const removeProductById = async (id) => {
  const result = await models.removeProductById(id);

  if (!result) throw errorObject(NOT_FOUND, 'Product not found');
};

const searchProductsByName = async (name) => {
  const result = await models.searchProductsByName(name);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  removeProductById,
  searchProductsByName,
};
