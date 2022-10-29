const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../helpers/errorHelper');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = new Error('"name" is required');
    err.type = BAD_REQUEST;
    next(err);
  }
  if (name.length < 5) {
    const err = new Error('"name" length must be at least 5 characters long');
    err.type = UNPROCESSABLE_ENTITY;
    next(err);
  }
  next();
};
