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

module.exports = {
  createNewSales,
};
