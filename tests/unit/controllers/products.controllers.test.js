const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const services = require('../../../src/services');
const controllers = require('../../../src/controllers');

const { products } = require('./mocks/products.mock');

describe('Testes de unidade do controller de products', function () {
  it('Deve enviar como response array de todos os produtos', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'getAllProducts').resolves(products);

    await controllers.allProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Deve enviar como response o produtos que foi passado no parms da requisição', async function () {
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

  it('Deve enviar como response o objeto product que foi inserido', async function () {

    const req = {
      body: {
        name: 'new product',
      }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    const newProduct = {
      id: 4,
      name: 'new product',
    }

    sinon.stub(services, 'createNewProduct').resolves(newProduct);

    await controllers.createNewProduct(req, res);

    expect(services.createNewProduct).to.have.been.calledWith('new product');
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  afterEach(sinon.restore);
});
