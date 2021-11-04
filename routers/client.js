const express = require('express');

const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {
    res.send('take all clients');
  })
  .get('/:id', (req, res) => {
    res.send('get one client');
  })
  .post('/', (req, res) => {
    res.send('post - add');
  })
  .put('/', (req, res) => {
    res.send('put - modify');
  })
  .delete('/', (req, res) => {
    res.send('delete');
  });

module.exports = {
  clientRouter,
};
