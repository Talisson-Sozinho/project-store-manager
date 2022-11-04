const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const models = require('../../../src/models/');

describe('Testes de unidade do model de sales', () => {
  it('Deve inserir corretamente no banco de dados o registro da venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4}]);

    const result = await models.registerSale();

    expect(result).to.be.equal(4);
  })

  it('Deve inserir as vendas corretamente', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 3 }]);

    const salesForInsert = [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5,
      },
        {
        "productId": 3,
        "quantity": 2,
      },
    ]

    const result = await models.createSalesProduct(salesForInsert);

    expect(result).to.be.equal(3);

  })

  afterEach(sinon.restore);
});
