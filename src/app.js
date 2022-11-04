const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('express-async-errors');
const { productsRoute, salesRoute } = require('./routes');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', async (_request, response) => {
  response.send('<h1>running...</h1>');
});

app.use('/products', productsRoute);

app.use('/sales', salesRoute);

app.use(errorMiddleware);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
