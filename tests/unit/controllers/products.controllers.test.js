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

  it('Deve responder com o objeto do produto alterado e status code 200', async () => {
    const req = {
      params: {
        id: 4,
      },
      body: {
        name: 'new name',
      }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'updateProductById').resolves({ id: req.params.id, name: req.body.name });

    await controllers.updateProduct(req, res);

    expect(services.updateProductById).to.have.been.calledWith(4, 'new name');
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ id: 4, name: 'new name' });
  });

  it('Deve responder 204 caso o produto tenha sido removido', async () => {

    const req = {
      params: {
        id: 9999,
      }
    }
    const res = {}

    res.sendStatus = sinon.stub().returns(res);

    sinon.stub(services, 'removeProductById').resolves(undefined);

    await controllers.removeProductById(req, res);

    expect(res.sendStatus).to.have.been.calledWith(204);
    expect(services.removeProductById).to.have.been.calledWith(9999);
  })

  afterEach(sinon.restore);
});
