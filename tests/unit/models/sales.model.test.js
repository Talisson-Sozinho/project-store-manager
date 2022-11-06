const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const models = require('../../../src/models/');
const { sales, salesId1 } = require('./mocks/sales.mock');

describe('Testes de unidade do model de sales', () => {
  it('Deve inserir corretamente no banco de dados o registro da venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const result = await models.registerSale();

    expect(result).to.be.equal(4);
  });

  it('Deve inserir as vendas corretamente', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 3 }]);

    const salesForInsert = [
      {
        productId: 1,
        quantity: 1
      },
      {
        productId: 2,
        quantity: 5,
      },
      {
        productId: 3,
        quantity: 2,
      },
    ]

    const result = await models.createSalesProduct(salesForInsert);

    expect(result).to.be.equal(3);

  });

  it('Deve listar todas as vendas corretamente', async () => {
    sinon.stub(connection, 'execute').resolves([sales]);

    const result = await models.getAllSales();

    expect(result).to.be.deep.equal(sales);
  });

  it('Deve listar as vendas de um id específico', async () => {
    sinon.stub(connection, 'execute').resolves([salesId1]);

    const result = await models.getSalesById(1);

    expect(result).to.be.deep.equal(salesId1);
  });

    it('Deve deletar a venda dado um id, e retornar as linhas afetadas', async () => {
    sinon.stub(connection, 'execute')
      .onFirstCall().resolves([{ affectedRows: 1 }])
      .onSecondCall().resolves([{ affectedRows: 0 }]);

    const result = await models.removeSalesById(9999);

    expect(result).to.be.equal(1);

    const result2 = await models.removeSalesById(9999);

    expect(result2).to.be.equal(0);
  });

  afterEach(sinon.restore);
});
