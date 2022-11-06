
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

  it('Deve retornar um objeto com o nome e id do produto inserido', async function () {
    sinon.stub(models, 'createProduct').resolves(4);
    const newProductName = 'new product';
    const newProduct = {
      id: 4,
      name: newProductName,
    }

    const result = await services.createNewProduct(newProductName);

    expect(result).to.deep.equal(newProduct)
  });

  it('Deve lançar um erro caso não encontre o id', async () => {
    sinon.stub(models, 'updateProductById').resolves(0);

    try {
      await services.updateProductById(999);
    } catch (err) {
      expect(err.type).to.equal('NOT_FOUND');
      expect(err.message).to.equal('Product not found');
      expect(models.updateProductById).to.have.been.calledWith(999);
    }

  });

  it('Deve retornar um objeto com com o id e o novo nome atualizado', async () => {
    sinon.stub(models, 'updateProductById').resolves(1);

    const result = await services.updateProductById(10, 'martelo');

    expect(result).to.be.deep.equal({id: 10, name: 'martelo'});
    expect(models.updateProductById).to.have.been.calledWith(10, 'martelo');

  });

  it('Deve lançar um erro caso não tenha removido produto nenhum pois não foi encontrado no banco de dados', async () => {
    sinon.stub(models, 'removeProductById').returns(0);

    try {
      await services.removeProductById(9999);
    } catch (err) {
      expect(err.type).to.equal('NOT_FOUND');
      expect(err.message).to.equal('Product not found');
      expect(models.removeProductById).to.have.been.calledWith(9999);
    }
  });

  it('Não deve lançar nada e apenas retornar undefined quando remover o produto normalmente', async () => {
    sinon.stub(models, 'removeProductById').returns(1);

    expect(await services.removeProductById(999)).not.throw;
    expect(models.removeProductById).to.have.been.calledWith(999);

  })

  afterEach(sinon.restore);
});
