const { BAD_REQUEST, UNPROCESSABLE_ENTITY, errorObject } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = errorObject(BAD_REQUEST, '"name" is required');
    return next(err);
  }
  if (name.length < 5) {
    const err = errorObject(UNPROCESSABLE_ENTITY,
      '"name" length must be at least 5 characters long');
    return next(err);
  }
  return next();
};
