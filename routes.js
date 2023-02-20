const express = require('express');
const route = express.Router();
const homeControler = require('./src/controllers/homeControler');
const contatoControler = require('./src/controllers/contatoControler');

// rotas da home
route.get('/', homeControler.paginaInicial);
route.post('/', homeControler.trataPost);

// rotas para contato
route.get('/contato', contatoControler.paginaContato);

module.exports = route;