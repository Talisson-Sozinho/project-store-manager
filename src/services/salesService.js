const { errorObject, NOT_FOUND } = require('../helpers/errorHelper');
const models = require('../models');

const createNewSales = async (arrayOfSales) => {
  const idsForVerification = arrayOfSales.map(({ productId }) => productId);

  const result = await models.verifyIds(idsForVerification);

  if (!result) {
    throw errorObject(NOT_FOUND, 'Product not found');
  }

  const salesId = await models.registerSale();

  const arrayOfProducts = arrayOfSales.map(({ productId, quantity }) => (
   `(${productId}, ${salesId}, ${quantity})`
  ));

  await models.createSalesProduct(arrayOfProducts);

  return {
    id: salesId,
    itemsSold: arrayOfSales,
  };
};

const getAllSales = async () => {
  const sales = await models.getAllSales();
  return sales;
};

const getSalesById = async (id) => {
  const sales = await models.getSalesById(id);
  if (sales.length === 0) throw errorObject(NOT_FOUND, 'Sale not found');

  return sales;
};

const removeSalesById = async (id) => {
  const result = await models.removeSalesById(id);

  if (!result) throw errorObject(NOT_FOUND, 'Sale not found');
};

const updateSalesById = async (id, arrayOfSalesForUpdate) => {
  const sales = await models.getSalesById(id);
  if (sales.length === 0) throw errorObject(NOT_FOUND, 'Sale not found');

  const idsForVerification = arrayOfSalesForUpdate.map(({ productId }) => productId);

  const result = await models.verifyIds(idsForVerification);
  if (!result) throw errorObject(NOT_FOUND, 'Product not found');

  await arrayOfSalesForUpdate.forEach(({ productId, quantity }) => (
    models.updateSalesById(id, productId, quantity)
  ));

  return {
    saleId: id,
    itemsUpdated: arrayOfSalesForUpdate,
  };
};

module.exports = {
  createNewSales,
  getAllSales,
  getSalesById,
  removeSalesById,
  updateSalesById,
};
