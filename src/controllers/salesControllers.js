const services = require('../services');

const newSales = async (req, res) => {
  const result = await services.createNewSales(req.body);
  return res.status(201).json(result);
};

const allSales = async (_req, res) => {
  const result = await services.getAllSales();
  return res.status(200).json(result);
};

const salesById = async (req, res) => {
  const { id } = req.params;
  const result = await services.getSalesById(id);
  return res.status(200).json(result);
};

const removeSalesById = async (req, res) => {
  const { id } = req.params;

  await services.removeSalesById(id);

  return res.sendStatus(204);
};

module.exports = {
  newSales,
  allSales,
  salesById,
  removeSalesById,
};
