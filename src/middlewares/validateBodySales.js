const { errorObject, BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { body } = req;

  body.forEach(({ productId, quantity }) => {
    if (productId === undefined) {
      const err = errorObject(BAD_REQUEST, '"productId" is required');
      return next(err);
    }
    if (quantity === undefined) {
      const err = errorObject(BAD_REQUEST, '"quantity" is required');
      return next(err);
    }
    if (quantity < 1) {
      const err = errorObject(UNPROCESSABLE_ENTITY,
        '"quantity" must be greater than or equal to 1');
      return next(err);
    }
  });
  return next();
};
