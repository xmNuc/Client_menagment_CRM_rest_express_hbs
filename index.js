const express = require('express');
const hbs = require('express-handlebars');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine(
  'hbs',
  hbs({
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, 'localhost', () => {
  console.log('Starting server on http://localhost:3000');
});
