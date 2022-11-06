
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
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const productForInsert = {
      name: 'new product',
    }

    const result = await models.createProduct(productForInsert);

    expect(result).to.equal(4);
  });

  it('Realizando a verificação da existência de um array de ids no banco', async () => {
    sinon.stub(connection, 'execute')
      .onFirstCall().resolves([[{ result: 3 }]])
      .onSecondCall().resolves([[{ result: 2 }]]);

    const result = await models.verifyIds([1, 2, 3]);

    expect(result).to.be.true;

    const result2 = await models.verifyIds([1, 2, 3]);

    expect(result2).to.be.false;
  });

  it('Deve atualizar um produto no banco de dados', async () => {
    sinon.stub(connection, 'execute')
      .onFirstCall().resolves([{ changedRows: 1 }])
      .onSecondCall().resolves([{ changedRows: 0 }]);

    const result = await models.updateProductById(9999);

    expect(result).to.be.equal(1);

    const result2 = await models.updateProductById(9999);

    expect(result2).to.be.equal(0);
  });

  it('Deve deletar um produto dado um id, e retornar as linhas afetadas', async () => {
    sinon.stub(connection, 'execute')
      .onFirstCall().resolves([{ affectedRows: 1 }])
      .onSecondCall().resolves([{ affectedRows: 0 }]);

    const result = await models.removeProductById(9999);

    expect(result).to.be.equal(1);

    const result2 = await models.removeProductById(9999);

    expect(result2).to.be.equal(0);
  });

  afterEach(sinon.restore);
});
