const camelize = require('camelize');
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

const getAllSales = async () => {
  const [result] = await dataBaseConnection.execute(`
    SELECT sales.sale_id, sales.product_id, sales.quantity, saleTime.date
    FROM StoreManager.sales_products as sales
    LEFT JOIN StoreManager.sales as saleTime
    ON sales.sale_id = saleTime.id
    ORDER BY sales.sale_id;`);

  return camelize(result);
};

const getSalesById = async (id) => {
  const [sales] = await dataBaseConnection.execute(`
    SELECT sales.product_id, sales.quantity, saleTime.date FROM StoreManager.sales_products as sales
    LEFT JOIN StoreManager.sales as saleTime
    ON sales.sale_id = saleTime.id
    WHERE sales.sale_id = (?)
    ORDER BY sales.sale_id;`, [id]);

  return camelize(sales);
};

const removeSalesById = async (id) => {
  const [{ affectedRows }] = await dataBaseConnection.execute(
    'DELETE FROM StoreManager.sales WHERE id = (?);',
    [id],
  );
  return affectedRows;
};

module.exports = {
  registerSale,
  createSalesProduct,
  getAllSales,
  getSalesById,
  removeSalesById,
};
