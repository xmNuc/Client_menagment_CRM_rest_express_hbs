const express = require('express');
const { db } = require('../utils/db');

const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {
    res.render('client/list-all', {
      clients: db.getAll,
    });
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
