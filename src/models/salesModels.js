const dataBaseConnection = require('./db/connection');

const registerSale = async () => {
  const [{ insertId }] = await dataBaseConnection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  return insertId;
};

const createSalesProduct = async (arrayOfProducts) => {
  const values = arrayOfProducts.join(', ');
  const [{ affectedRows }] = await dataBaseConnection
    .execute(
      `INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES ${values}`,
  );
  return affectedRows;
};

module.exports = {
  registerSale,
  createSalesProduct,
};
