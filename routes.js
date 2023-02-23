const express = require('express');
const route = express.Router();

const homeControler = require('./src/controllers/homeControler');
const loginControler = require('./src/controllers/loginControler');
const contatoControler = require('./src/controllers/contatoControler');

const { loginRequired } = require('./src/middlewares/global');

// rotas da home
route.get('/', homeControler.index);

// rotas de login
route.get('/login/index', loginControler.index);
route.post('/login/register', loginControler.register);
route.post('/login/login', loginControler.login);
route.get('/login/logout', loginControler.logout);

// rotas de contato
route.get('/contato/index', loginRequired, contatoControler.index);
route.post('/contato/register', loginRequired, contatoControler.register);
route.get('/contato/index/:id', loginRequired, contatoControler.editIndex);

module.exports = route;