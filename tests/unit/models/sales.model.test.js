const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/db/connection');
const models = require('../../../src/models/');
const { sales, salesId1 } = require('./mocks/sales.mock');

describe('Testes de unidade do model de sales', () => {
  describe('01 - Teste do método "registerSale"', () => {
    it('- Deve inserir corretamente no banco de dados o registro da venda', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

      const result = await models.registerSale();

      expect(result).to.be.equal(4);
    });

    afterEach(sinon.restore);
  });

  describe('02 - Teste do método "createSalesProduct"', () => {
    it('- Deve inserir as vendas corretamente', async () => {
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

    afterEach(sinon.restore);
  });

  describe('03 - Teste do método "getAllSales"', () => {
    it('- Deve listar todas as vendas corretamente', async () => {
      sinon.stub(connection, 'execute').resolves([sales]);

      const result = await models.getAllSales();

      expect(result).to.be.deep.equal(sales);
    });

    afterEach(sinon.restore);
  });

  describe('04 - Teste do método "getSalesById"', () => {
    it('Deve listar as vendas de um id específico', async () => {
      sinon.stub(connection, 'execute').resolves([salesId1]);

      const result = await models.getSalesById(1);

      expect(result).to.be.deep.equal(salesId1);
    });

    afterEach(sinon.restore);
  });

  describe('05 - Teste do método "removeSalesById"', () => {
    it('- Deve deletar a venda dado um id, e retornar as linhas afetadas', async () => {
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

  describe('06 - Teste do método "updateSalesById"', () => {
    it('- Deve atualizar deve devolver a quantidade de linhas afetadas ao atualizar a venda', async () => {
      sinon.stub(connection, 'execute')
        .onFirstCall().resolves([{ affectedRows: 1 }])
        .onSecondCall().resolves([{ affectedRows: 0 }]);

      const saleId = 1;
      const productId = 2;
      const quantity = 3;

      const result = await models.updateSalesById(saleId, productId, quantity);

      expect(result).to.be.equal(1);

      const result2 = await models.updateSalesById(saleId, productId, quantity);

      expect(result2).to.be.equal(0);

    });

    afterEach(sinon.restore);
  });
});
