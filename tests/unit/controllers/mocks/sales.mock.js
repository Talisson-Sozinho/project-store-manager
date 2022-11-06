const salesServiceReturn = {
  id: 6,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 2,
      quantity: 5
    },
    {
      productId: 3,
      quantity: 4
    }
  ],
}
const salesServiceResponse = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: "2022-11-04T22:06:28.000Z"
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: "2022-11-04T22:06:28.000Z"
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: "2022-11-04T22:06:28.000Z"
  }
]

const salesId1 = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: "2022-11-04T22:06:28.000Z"
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: "2022-11-04T22:06:28.000Z"
  },
]

const updatedSalesResponse = {
  saleId: 9999,
  itemsUpdated: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 2,
      quantity: 5
    },
    {
      productId: 3,
      quantity: 4
    }
  ]
};

module.exports = {
  salesServiceReturn,
  salesServiceResponse,
  salesId1,
  updatedSalesResponse,
}
