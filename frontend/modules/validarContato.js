import validator from "validator";

export default class ValidarContato{
    constructor(query){
        this.form = document.querySelector(query);
    }

    init(){
        this.events();

    }

    events(){
        if(this.form !== null){
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                this.valida(e.target);
            });
        }
    }

    valida(form){
        for(let erro of this.form.querySelectorAll('.div-erro')){
            erro.remove();
        } 

        const inputNome = form.querySelector('input[name="nome"]');
        const inputSobrenome = form.querySelector('input[name="sobrenome"]');
        const inputEmail = form.querySelector('input[name="email"]');
        const inputTelefone = form.querySelector('input[name="telefone"]');

        // campos vazios
        if(!inputNome.value) this.erro(inputNome, `Campo "Nome" não pode estar vazio.`);
        if(!inputSobrenome.value) this.erro(inputSobrenome, `Campo "Sobrenome" não pode estar vazio.`);

        if(!inputEmail.value && !inputTelefone.value){
            this.erro(inputEmail, `Campo "E-mail" ou "Telefone" devem ser preenchidos.`);
            this.erro(inputTelefone, `Campo "E-mail" ou "Telefone" devem ser preenchidos.`);
        }

        // campo email 
        if(!validator.isEmail(inputEmail.value)) this.erro(inputEmail, `E-mail inválido.`);

        if(this.form.querySelectorAll('.div-erro').length < 1 ) form.submit();
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