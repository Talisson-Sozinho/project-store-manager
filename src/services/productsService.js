const { NOT_FOUND, errorObject } = require('../helpers/errorHelper');
const models = require('../models');

const getAllProducts = async () => models.searchAllProducts();

const getProductById = async (id) => {
  const result = await models.searchByProductId(id);
  if (!result) throw errorObject(NOT_FOUND, 'Product not found');
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
};
