const dataBaseConnection = require('./db/connection');

const searchAllProducts = async () => {
  const [result] = await dataBaseConnection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const searchByProductId = async (id) => {
  const [[result]] = await dataBaseConnection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

const createProduct = async (name) => {
  const [{ insertId }] = await dataBaseConnection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return insertId;
};

module.exports = {
  searchAllProducts,
  searchByProductId,
  createProduct,
};
