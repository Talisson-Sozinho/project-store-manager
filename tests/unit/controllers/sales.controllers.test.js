const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');
const { salesServiceReturn } = require('./mocks/sales.mock');

describe('Testes de unidade do controller de products', function () {
  it('Deve enviar como response array de todos os produtos', async function () {
    const res = {};
    const req = {
      body: salesServiceReturn.itemsSold,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'createNewSales').resolves(salesServiceReturn);

    await controllers.newSales(req, res);

    expect(services.createNewSales).to.have.been.calledWith(req.body);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesServiceReturn);
  });

  afterEach(sinon.restore);
});
