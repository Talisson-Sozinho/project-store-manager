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

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
};
