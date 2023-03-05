import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import './assets/css/style.css';

import ValidarCadastro from './modules/validarCadastro';
import ValidarContato from './modules/validarContato';

const validaCadastro = new ValidarCadastro('.cadastro');
validaCadastro.init();

const validaLogin = new ValidarCadastro('.login');
validaLogin.init();

//const validaContato = new ValidarContato('.contato');
//validaContato.init();


