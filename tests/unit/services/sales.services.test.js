const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const models = require('../../../src/models');
const services = require('../../../src/services');
const { arrayOfSales } = require('./mocks/sales.mock');

describe('Testes de unidade do service de sales', function () {
  it('Não deve cadastrar a venda caso não exista o id do produto no banco ', async function () {
    sinon.stub(models, 'verifyIds').resolves(false);

    try {
      await services.createNewSales(arrayOfSales);
    } catch (err) {
      expect(err.type).to.equal('NOT_FOUND');
      expect(err.message).to.equal('Product not found');
      expect(models.verifyIds).to.have.been.calledWith([1, 2, 3]);
    }

  });

  it('Deve cadastrar as vendas normalmente e retornar um objeto com um campo com o id cadastrado e um campo com um array das vendas', async () => {
    sinon.stub(models, 'verifyIds').resolves(true);
    sinon.stub(models, 'registerSale').resolves(6)
    sinon.stub(models, 'createSalesProduct').resolves(3);

    const result = await services.createNewSales(arrayOfSales);

    const resultExpect = {
      id: 6,
      itemsSold: arrayOfSales,
    }

    expect(result).to.deep.equal(resultExpect);

  })

  afterEach(sinon.restore);
});
