const services = require('../services');

const newSales = async (req, res) => {
  const result = await services.createNewSales(req.body);
  return res.status(201).json(result);
};

module.exports = {
  newSales,
};
