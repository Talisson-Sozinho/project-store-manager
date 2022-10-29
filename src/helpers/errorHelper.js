const NOT_FOUND = 'NOT_FOUND';
const BAD_REQUEST = 'BAD_REQUEST';
const UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY';

const errorObject = (type, message) => {
  const error = new Error(message);
  error.type = type;
  return error;
};

const errorCode = {
  [NOT_FOUND]: 404,
  [BAD_REQUEST]: 400,
  [UNPROCESSABLE_ENTITY]: 422,
};

module.exports = {
  NOT_FOUND,
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY,
  errorObject,
  errorCode,
};
