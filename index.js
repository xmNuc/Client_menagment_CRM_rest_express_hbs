const { urlencoded } = require('express');
const express = require('express');
const hbs = require('express-handlebars');

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

app.get('/', (req, res) => {
  res.render('test');
});

app.listen(3000, 'localhost', () => {
  console.log('Starting server on http://localhost:3000');
});
