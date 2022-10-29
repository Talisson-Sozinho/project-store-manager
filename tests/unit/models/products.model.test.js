
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const models = require('../../../src/models/');

const { products } = require('./mocks/products.mock');

describe('Testes de unidade do model de products', function () {
  it('Realizando a listagem de todos os produtos no banco de dados', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await models.searchAllProducts();

    expect(result).to.be.deep.equal(products);
  });

  it('Realizando uma busca por ID no bando de dados', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);

    const result = await models.searchByProductId(999);

    expect(result).to.equal(products[0]);
  });

  it('Realizando uma inserção de um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{insertId: 4}]);

    const productForInsert = {
      name: 'new product',
    }

    const result = await models.createProduct(productForInsert);

    expect(result).to.equal(4);
  })

  afterEach(sinon.restore);
});
