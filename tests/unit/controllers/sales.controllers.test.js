const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');
const { salesServiceReturn, salesServiceResponse, salesId1 } = require('./mocks/sales.mock');

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

  it('Deve responder com uma listagem de todas as vendas', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'getAllSales').resolves(salesServiceResponse);

    await controllers.allSales(req, res);

    expect(services.getAllSales).to.have.been.called;
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesServiceResponse);

  });

  it('Deve responder com com a listagem de uma venda específica', async () => {
    const req = {
      params: {
        id: 1,
      }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'getSalesById').resolves(salesId1);

    await controllers.salesById(req, res);

    expect(services.getSalesById).to.have.been.calledWith(req.params.id);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesId1);
  });

    it('Deve responder 204 caso a venda tenha sido removido', async () => {

    const req = {
      params: {
        id: 9999,
      }
    }
    const res = {}

    res.sendStatus = sinon.stub().returns(res);

    sinon.stub(services, 'removeSalesById').resolves(undefined);

    await controllers.removeSalesById(req, res);

    expect(res.sendStatus).to.have.been.calledWith(204);
    expect(services.removeSalesById).to.have.been.calledWith(9999);
  })

  afterEach(sinon.restore);
});
