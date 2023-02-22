const express = require('express');
const route = express.Router();

const homeControler = require('./src/controllers/homeControler');
const loginControler = require('./src/controllers/loginControler');

// rotas da home
route.get('/', homeControler.index);

// rotas de login
route.get('/login/index', loginControler.index);
route.post('/login/register', loginControler.register);
route.post('/login/login', loginControler.login);
route.get('/login/logout', loginControler.logout);

module.exports = route;