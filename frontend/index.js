import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import './assets/css/style.css';

import Validar from './modules/validarCadastro';

const validarForm = new Validar('.cadastro');
validarForm.valida();


