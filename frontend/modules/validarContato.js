export default class ValidarContato{
    constructor(query){
        this.form = document.querySelector(query);
    }

    init(){
        this.events();

    }

    events(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.valida(e.target);
        });
    }

    valida(form){
        /*
        for(let erro of this.form.querySelectorAll('.div-erro')){
            erro.remove();
        } */

        const inputNome = form.querySelector('input[name="nome"]');
        const inputSobrenome = form.querySelector('input[name="sobrenome"]');
        const inputEmail = form.querySelector('input[name="email"]');
        const inputTelefone = form.querySelector('input[name="telefone"]');

        console.log(inputNome, inputSobrenome, inputEmail, inputTelefone);

        /*
        // campos vazios
        if(!inputNome.value) this.erro(inputNome, `Campo "E-mail" não pode estar vazio.`);
        if(!inputSobrenome.value) this.erro(inputSobrenome, `Campo "Senha" não pode estar vazio.`);

        // campo email 
        if(!validator.isEmail(inputNome.value)) this.erro(inputNome, `E-mail inválido.`);

        // campo senha
        if(inputSobrenome.value.length < 3 || inputSobrenome.value.length > 50){
            this.erro(inputSobrenome, `A senha deve conter entre 3 e 50 caracteres.`);
        }

        if(this.form.querySelectorAll('.div-erro').length < 1 ) form.submit();
        */
    }

    erro(element, msg){
        const div = document.createElement('div');
        div.classList.add('div-erro');

        div.style.padding = "8px";
        div.style.backgroundColor = "tomato";
        div.style.marginTop = "15px";
        div.style.borderRadius = "5px";

        div.innerText = msg;
        element.insertAdjacentElement('afterend', div);
    }

}