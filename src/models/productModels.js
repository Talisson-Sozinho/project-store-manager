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

const verifyIds = async (arrayOfIds) => {
  const [[{ result }]] = await dataBaseConnection
    .execute(`SELECT count(id) as result FROM StoreManager.products WHERE id IN (${arrayOfIds
      .join(', ')});`);
  return result === arrayOfIds.length;
};

const createProduct = async (name) => {
  const [{ insertId }] = await dataBaseConnection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return insertId;
};

const updateProductById = async (id, newName) => {
  const [{ changedRows }] = await dataBaseConnection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [newName, id],
  );

  return changedRows;
};

const removeProductById = async (id) => {
  const [{ affectedRows }] = await dataBaseConnection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?);',
    [id],
  );
  return affectedRows;
};

module.exports = {
  searchAllProducts,
  searchByProductId,
  createProduct,
  updateProductById,
  removeProductById,
  verifyIds,
};
