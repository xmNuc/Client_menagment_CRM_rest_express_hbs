const express = require('express');

const clientRouter = express.Router();

clientRouter.get('/', (req, res) => {
  res.send('All works fine');
});

module.exports = {
  clientRouter,
};
