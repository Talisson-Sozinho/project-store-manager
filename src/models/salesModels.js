const dataBaseConnection = require('./db/connection');

const registerSale = async () => {
  const [{ insertId }] = await dataBaseConnection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  return insertId;
};

const createSalesProduct = async (arrayOfProducts) => {
  const values = arrayOfProducts.join(', ');
  await dataBaseConnection
    .execute(
      `INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES ${values}`,
    );
};

module.exports = {
  registerSale,
  createSalesProduct,
};
