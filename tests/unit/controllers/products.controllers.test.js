const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');

const { products } = require('./mocks/products.mock');

describe('Testes de unidade do controller de products', function () {
  it('Deve retornar array de todos os produtos', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'getAllProducts').resolves(products);

    await controllers.allProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Deve retornar o produtos que foi passado no parms da requisição', async function () {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'getProductById').resolves(products[0]);

    await controllers.productsById(req, res);

    expect(services.getProductById).to.have.been.calledWith(1);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  afterEach(sinon.restore);
});
