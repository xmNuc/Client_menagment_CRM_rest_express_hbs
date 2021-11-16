const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utils/db');
const { handleError } = require('./utils/error');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
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

app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('Starting server on http://localhost:3000');
});
