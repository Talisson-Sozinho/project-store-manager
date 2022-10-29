
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const models = require('../../../src/models');
const services = require('../../../src/services');

const { products } = require('./mocks/products.mock');

describe('Testes de unidade do service de products', function () {
  it('Deve retornar a listagem de todos os produtos', async function () {
    sinon.stub(models, 'searchAllProducts').resolves(products);

    const result = await services.getAllProducts();

    expect(result).to.be.deep.equal(products);
  });

  it('Deve retornar o produto caso o id exista no bando de dados', async function () {
    sinon.stub(models, 'searchByProductId').resolves(products[1]);

    const result = await services.getProductById(2);

    expect(result).to.equal(products[1]);
  });

  it('Deve lançar um error caso o id não exista no bando de dados', async function () {
    sinon.stub(models, 'searchByProductId').resolves(undefined);

    try {
      await services.getProductById(2);
    } catch (err) {
      expect(err.type).to.equal('NOT_FOUND');
      expect(err.message).to.equal('Product not found');
      expect(models.searchByProductId).to.have.been.calledWith(2);
    }

  });

  afterEach(sinon.restore);
});
