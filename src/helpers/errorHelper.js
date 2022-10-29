const NOT_FOUND = 'NOT_FOUND';

const errorObject = (type, message) => {
  const error = new Error(message);
  error.type = type;
  return error;
};

const errorCode = {
  [NOT_FOUND]: 404,
};

module.exports = {
  NOT_FOUND,
  errorObject,
  errorCode,
};
